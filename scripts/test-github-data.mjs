import assert from "node:assert/strict";
import test from "node:test";
import { CACHE_KEY, REFRESH_INTERVAL_MS, createGithubSnapshot, fetchLiveSnapshot, normalizeRestRepository, startGithubSync, validSnapshot } from "../github-data.mjs";

const NOW = Date.parse("2026-11-22T00:00:00Z");
const normalized = (name, stars, owner = "RobertFlexx") => ({ name, description: name, language: "Rust", stars, url: `https://github.com/${owner}/${name}` });
const raw = (name, stars, options = {}) => ({ name, description: name, language: "Rust", stargazers_count: stars, html_url: `https://github.com/${options.owner || "RobertFlexx"}/${name}`, fork: options.fork || false });
const json = (data, status = 200, headers = {}) => new Response(JSON.stringify(data), { status, headers });
const seed = (overrides = {}) => createGithubSnapshot({
  generatedAt: new Date(NOW - 86400000).toISOString(),
  pinned: [normalized("fastfind", 17)],
  repositories: [normalized("fastfind", 17), normalized("MICA", 2)],
  publicRepoCount: 2,
  ...overrides
});

function environment(snapshot, api, { cached, storageUnavailable = false } = {}) {
  let time = NOW;
  const values = new Map(cached ? [[CACHE_KEY, JSON.stringify(cached)]] : []);
  const updates = [];
  const requests = [];
  const page = Object.assign(new EventTarget(), { visibilityState: "visible" });
  let poll;
  let scheduledDelay;
  const window = Object.assign(new EventTarget(), {
    setTimeout(callback, delay) { assert(delay >= 1000); poll = callback; scheduledDelay = delay; return 1; },
    clearTimeout() { poll = null; }
  });
  const storage = {
    getItem(key) { if (storageUnavailable) throw new Error("Storage disabled"); return values.get(key) || null; },
    setItem(key, value) { if (storageUnavailable) throw new Error("Storage disabled"); values.set(key, value); }
  };
  const sync = startGithubSync((data) => updates.push(data), {
    now: () => time,
    document: page,
    window,
    storage,
    fetchImpl: async (url, options) => {
      requests.push(url);
      assert.equal(options.credentials, "omit");
      assert.equal(Object.keys(options.headers).some((name) => name.toLowerCase() === "authorization"), false);
      if (url === "github-data.json") return json(snapshot);
      return api(url, options);
    }
  });
  return { sync, page, window, updates, requests, values, advance: (milliseconds) => { time += milliseconds; }, poll: () => poll?.(), scheduledDelay: () => scheduledDelay };
}

test("profile pins stay first, extras are deduplicated, and zero is a real star count", () => {
  const snapshot = seed({ pinned: [normalized("MICA", 0), normalized("fastfind", 17)], repositories: [normalized("MICA", 0), normalized("fastfind", 17)] });
  assert.deepEqual(snapshot.featured.map((repo) => repo.name), ["MICA", "fastfind"]);
  assert.equal(snapshot.featured[0].stars, 0);
  assert.equal(snapshot.totalStars, 17);
  assert(validSnapshot(snapshot));
  assert.equal(validSnapshot({ ...snapshot, totalStars: "17" }), false);
  assert.throws(() => normalizeRestRepository(raw("bad", -1)));
});

test("live updates paginate, refresh organization pins, and exclude forks from earned stars", async () => {
  const snapshot = seed({ pinned: [normalized("Plainwire", 1, "Plainwire-development"), normalized("fastfind", 17)] });
  const calls = [];
  const live = await fetchLiveSnapshot(snapshot, {
    now: () => NOW,
    fetchImpl: async (url) => {
      calls.push(url);
      if (url.includes("/repos/plainwire-development/plainwire")) return json(raw("Plainwire", 8, { owner: "Plainwire-development" }));
      if (url.includes("page=2")) return json([raw("MICA", 4), raw("upstream-fork", 999, { fork: true })]);
      return json([raw("fastfind", 26)], 200, { link: '<https://api.github.com/users/RobertFlexx/repos?page=2>; rel="next"' });
    }
  });
  assert.equal(calls.length, 3);
  assert.equal(live.source, "live");
  assert.deepEqual(live.pinned.map((repo) => repo.stars), [8, 26]);
  assert.equal(live.publicRepoCount, 3);
  assert.equal(live.totalStars, 30);
  assert.deepEqual(live.topRepositories.map((repo) => repo.name), ["fastfind", "MICA"]);
  assert.deepEqual(live.featured.map((repo) => repo.name), ["Plainwire", "fastfind", "MICA"]);
});

test("a repeated page cannot loop forever or inflate counts", async () => {
  let calls = 0;
  await assert.rejects(fetchLiveSnapshot(seed(), { fetchImpl: async (url) => {
    calls += 1;
    return json([raw("fastfind", 19)], 200, { link: `<${url}>; rel="next"` });
  } }), /pagination/);
  assert.equal(calls, 1);
});

test("removed pins are omitted instead of showing a broken repository", async () => {
  const live = await fetchLiveSnapshot(seed({ pinned: [normalized("removed", 3)] }), { fetchImpl: async (url) => url.includes("/users/") ? json([raw("MICA", 2)]) : json({ message: "Not Found" }, 404) });
  assert.equal(live.pinned.length, 0);
  assert.deepEqual(live.featured.map((repo) => repo.name), ["MICA"]);
});

test("a valid cache avoids repeated API requests, then refreshes when due", async () => {
  const cached = seed({ source: "live", generatedAt: new Date(NOW - 1000).toISOString(), pinned: [normalized("fastfind", 25)] });
  const env = environment(seed(), async () => json([raw("fastfind", 27), raw("MICA", 3)]), { cached });
  await env.sync.ready;
  assert.equal(env.requests.length, 1);
  assert.equal(env.updates.at(-1).pinned[0].stars, 25);
  assert.equal(env.scheduledDelay(), REFRESH_INTERVAL_MS - 1000, "The cache refreshes at its original expiry, not ten minutes after this visit");
  await env.sync.refresh();
  assert.equal(env.requests.length, 1);
  env.advance(REFRESH_INTERVAL_MS);
  await env.sync.refresh();
  assert.equal(env.updates.at(-1).pinned[0].stars, 27);
  assert.equal(JSON.parse(env.values.get(CACHE_KEY)).pinned[0].stars, 27);
  env.sync.stop();
});

test("a newer saved snapshot beats an older cache", async (t) => {
  t.mock.method(console, "warn", () => {});
  const cached = seed({ source: "live", generatedAt: new Date(NOW - 5000).toISOString() });
  const latest = seed({ generatedAt: new Date(NOW - 1000).toISOString(), pinned: [normalized("fastfind", 31)] });
  const env = environment(latest, async () => { throw new Error("Offline"); }, { cached });
  await env.sync.ready;
  assert.equal(env.updates.at(-1).pinned[0].stars, 31);
  env.sync.stop();
});

test("rate limiting retains counts and waits for GitHub's reset before retrying", async (t) => {
  t.mock.method(console, "warn", () => {});
  let calls = 0;
  const env = environment(seed(), async () => {
    calls += 1;
    return calls === 1 ? json({ message: "Rate limit exceeded" }, 403, { "x-ratelimit-reset": String((NOW + 3600000) / 1000) }) : json([raw("fastfind", 29)]);
  });
  await env.sync.ready;
  assert.equal(env.updates.at(-1).pinned[0].stars, 17);
  env.advance(REFRESH_INTERVAL_MS);
  await env.sync.refresh();
  assert.equal(calls, 1);
  env.advance(3600000);
  await env.sync.refresh();
  assert.equal(calls, 2);
  assert.equal(env.updates.at(-1).pinned[0].stars, 29);
  env.sync.stop();
});

test("malformed API data cannot replace the last valid snapshot", async (t) => {
  t.mock.method(console, "warn", () => {});
  const env = environment(seed(), async () => json({ message: "Unexpected response" }));
  await env.sync.ready;
  assert.equal(env.updates.at(-1).pinned[0].stars, 17);
  assert.equal(env.values.size, 0);
  env.sync.stop();
});

test("refreshes work with unavailable browser storage", async () => {
  const env = environment(seed(), async () => json([raw("fastfind", 0)]), { storageUnavailable: true });
  await env.sync.ready;
  assert.equal(env.updates.at(-1).pinned[0].stars, 0);
  assert.equal(env.updates.at(-1).source, "live");
  env.sync.stop();
});

test("hidden pages wait, wake events share one request, and stopped syncs ignore events", async () => {
  let release;
  let calls = 0;
  const env = environment(seed(), async () => { calls += 1; return new Promise((resolve) => { release = () => resolve(json([raw("fastfind", 23)])); }); });
  env.page.visibilityState = "hidden";
  await env.sync.ready;
  assert.equal(calls, 0);
  env.page.visibilityState = "visible";
  env.page.dispatchEvent(new Event("visibilitychange"));
  env.window.dispatchEvent(new Event("focus"));
  env.window.dispatchEvent(new Event("pageshow"));
  const pending = env.sync.refresh();
  assert.equal(calls, 1);
  release();
  await pending;
  assert.equal(env.updates.at(-1).pinned[0].stars, 23);
  env.sync.stop();
  env.advance(REFRESH_INTERVAL_MS);
  env.window.dispatchEvent(new Event("focus"));
  env.poll();
  assert.equal(calls, 1);
});
