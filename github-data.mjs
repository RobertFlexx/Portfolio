export const EXTRA_REPOSITORIES = [
  "RobertFlexx/MICA",
  "RobertFlexx/Free-Simula",
  "RobertFlexx/hilbert",
  "RobertFlexx/SPS",
  "RobertFlexx/blockbox",
  "RobertFlexx/rayscal"
];

export const REFRESH_INTERVAL_MS = 10 * 60 * 1000;
export const CACHE_KEY = "robertflexx.github.v1";
const REPOSITORIES_URL = "https://api.github.com/users/RobertFlexx/repos?per_page=100&type=owner&sort=full_name";
const isCount = (value) => Number.isSafeInteger(value) && value >= 0;

export function repositoryKey(url) {
  const parsed = new URL(url);
  if (parsed.origin !== "https://github.com" || !/^\/[\w.-]+\/[\w.-]+\/?$/.test(parsed.pathname)) {
    throw new Error("Expected a GitHub repository URL.");
  }
  return parsed.pathname.replace(/^\/|\/$/g, "").toLowerCase();
}

function validRepository(repo) {
  try {
    return typeof repo?.name === "string" && repo.name.length > 0
      && typeof repo.description === "string" && typeof repo.language === "string"
      && isCount(repo.stars) && Boolean(repositoryKey(repo.url));
  } catch {
    return false;
  }
}

export function validSnapshot(snapshot) {
  return snapshot && Number.isFinite(Date.parse(snapshot.generatedAt))
    && isCount(snapshot.publicRepoCount) && isCount(snapshot.totalStars)
    && isCount(snapshot.primaryLanguageCount)
    && ["pinned", "featured", "repositories", "topRepositories"].every(
      (field) => Array.isArray(snapshot[field]) && snapshot[field].every(validRepository)
    );
}

export function normalizeRestRepository(repo) {
  const normalized = {
    name: repo?.name,
    description: repo?.description ?? "",
    language: repo?.language || "Other",
    stars: repo?.stargazers_count,
    url: repo?.html_url
  };
  if (!validRepository(normalized)) throw new Error("Invalid GitHub repository data.");
  return normalized;
}

function uniqueRepositories(repositories) {
  return [...new Map(repositories.map((repo) => [repositoryKey(repo.url), repo])).values()];
}

export function createGithubSnapshot({ pinned, repositories, publicRepoCount, generatedAt = new Date().toISOString(), source = "snapshot" }) {
  const originals = uniqueRepositories(repositories);
  const byKey = new Map(originals.map((repo) => [repositoryKey(repo.url), repo]));
  const pins = uniqueRepositories(pinned);
  const extras = EXTRA_REPOSITORIES.map((key) => byKey.get(key.toLowerCase())).filter(Boolean);
  const snapshot = {
    generatedAt,
    source,
    publicRepoCount,
    totalStars: originals.reduce((total, repo) => total + repo.stars, 0),
    primaryLanguageCount: new Set(originals.map((repo) => repo.language).filter((language) => language !== "Other")).size,
    pinned: pins,
    featured: uniqueRepositories([...pins, ...extras]),
    topRepositories: [...originals].sort((a, b) => b.stars - a.stars || a.name.localeCompare(b.name)).slice(0, 5),
    repositories: originals
  };
  if (!validSnapshot(snapshot)) throw new Error("Invalid GitHub snapshot.");
  return snapshot;
}

async function requestJson(fetchImpl, url, now) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetchImpl(url, {
      headers: { Accept: "application/vnd.github+json" },
      credentials: "omit",
      cache: "no-store",
      signal: controller.signal
    });
    if (!response.ok) {
      const error = new Error(`GitHub request failed (${response.status}).`);
      if (response.status === 403 || response.status === 429) {
        const retryAfter = Number(response.headers.get("retry-after"));
        const reset = Number(response.headers.get("x-ratelimit-reset")) * 1000;
        const retryTimes = [now() + REFRESH_INTERVAL_MS];
        if (Number.isFinite(retryAfter) && retryAfter > 0) retryTimes.push(now() + retryAfter * 1000);
        if (Number.isFinite(reset) && reset > 0) retryTimes.push(reset);
        error.retryAt = Math.max(...retryTimes);
      }
      error.status = response.status;
      throw error;
    }
    return { data: await response.json(), headers: response.headers };
  } finally {
    clearTimeout(timeout);
  }
}

export async function fetchLiveSnapshot(seed, { fetchImpl = globalThis.fetch, now = Date.now } = {}) {
  const rawRepositories = new Map();
  const visited = new Set();
  let nextUrl = REPOSITORIES_URL;

  while (nextUrl) {
    const url = new URL(nextUrl);
    if (url.origin !== "https://api.github.com" || url.pathname.toLowerCase() !== "/users/robertflexx/repos" || visited.has(nextUrl)) {
      throw new Error("Invalid GitHub pagination link.");
    }
    visited.add(nextUrl);
    const { data, headers } = await requestJson(fetchImpl, nextUrl, now);
    if (!Array.isArray(data)) throw new Error("Expected GitHub's public repository list.");
    for (const raw of data) {
      const repo = normalizeRestRepository(raw);
      if (!repositoryKey(repo.url).startsWith("robertflexx/") || typeof raw.fork !== "boolean") {
        throw new Error("Unexpected repository owner or fork status.");
      }
      rawRepositories.set(repositoryKey(repo.url), { ...repo, fork: raw.fork });
    }
    nextUrl = headers.get("link")?.match(/<([^>]+)>;\s*rel="next"/)?.[1] || null;
  }

  const all = [...rawRepositories.values()];
  const byKey = new Map(all.map((repo) => [repositoryKey(repo.url), repo]));
  const pinned = (await Promise.all(seed.pinned.map(async (pin) => {
    const key = repositoryKey(pin.url);
    if (byKey.has(key)) {
      const { fork, ...repo } = byKey.get(key);
      return repo;
    }
    try {
      const { data } = await requestJson(fetchImpl, `https://api.github.com/repos/${key}`, now);
      return normalizeRestRepository(data);
    } catch (error) {
      if (error.status === 404) return null;
      throw error;
    }
  }))).filter(Boolean);

  return createGithubSnapshot({
    pinned,
    repositories: all.filter((repo) => !repo.fork).map(({ fork, ...repo }) => repo),
    publicRepoCount: all.length,
    generatedAt: new Date(now()).toISOString(),
    source: "live"
  });
}

export function startGithubSync(onData, options = {}) {
  const fetchImpl = options.fetchImpl || globalThis.fetch.bind(globalThis);
  const page = options.document || globalThis.document;
  const events = options.window || globalThis.window;
  const now = options.now || Date.now;
  let storage;
  try { storage = options.storage ?? globalThis.localStorage; } catch { /* Private browsing may disable storage. */ }
  let seed = null;
  let current = null;
  let pending = null;
  let nextRefreshAt = 0;
  let refreshTimer = null;
  let stopped = false;

  function publish(snapshot) {
    if (stopped) return;
    current = snapshot;
    const checkedAt = new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(new Date(snapshot.generatedAt));
    onData({ ...snapshot, status: snapshot.source === "live" ? `Star counts checked with GitHub: ${checkedAt}.` : `Saved GitHub snapshot: ${checkedAt}.` });
  }

  function readCache() {
    try {
      const cached = JSON.parse(storage?.getItem(CACHE_KEY) || "null");
      return validSnapshot(cached) ? cached : null;
    } catch { return null; }
  }

  function samePins(left, right) {
    return left.pinned.map((repo) => repositoryKey(repo.url)).join("|") === right.pinned.map((repo) => repositoryKey(repo.url)).join("|");
  }

  function scheduleRefresh() {
    events.clearTimeout(refreshTimer);
    refreshTimer = null;
    if (stopped || !seed || page.visibilityState === "hidden") return;
    refreshTimer = events.setTimeout(() => {
      refreshTimer = null;
      void refresh();
    }, Math.max(1000, nextRefreshAt - now()));
  }

  function refresh() {
    if (pending) return pending;
    if (stopped || !seed || page.visibilityState === "hidden") return Promise.resolve();
    if (now() < nextRefreshAt) {
      scheduleRefresh();
      return Promise.resolve();
    }
    events.clearTimeout(refreshTimer);
    nextRefreshAt = now() + REFRESH_INTERVAL_MS;
    pending = fetchLiveSnapshot(seed, { fetchImpl, now })
      .then((snapshot) => {
        publish(snapshot);
        if (!stopped) {
          try { storage?.setItem(CACHE_KEY, JSON.stringify(snapshot)); } catch { /* Keep refreshing without persistent storage. */ }
        }
      })
      .catch((error) => {
        nextRefreshAt = Math.max(nextRefreshAt, error.retryAt || 0);
        if (!stopped) console.warn("GitHub counts could not refresh; keeping the last saved data.");
      })
      .finally(() => { pending = null; scheduleRefresh(); });
    return pending;
  }

  const cached = readCache();
  if (cached) publish(cached);

  const ready = (async () => {
    try {
      const { data } = await requestJson(fetchImpl, "github-data.json", now);
      if (!validSnapshot(data)) throw new Error("Invalid saved GitHub snapshot.");
      seed = data;
      if (!current || Date.parse(data.generatedAt) >= Date.parse(current.generatedAt) || !samePins(data, current)) publish(data);
    } catch {
      seed = cached;
    }
    if (!seed || stopped) return;
    const age = cached ? now() - Date.parse(cached.generatedAt) : Infinity;
    if (cached && samePins(seed, cached) && age >= 0 && age < REFRESH_INTERVAL_MS && Date.parse(cached.generatedAt) >= Date.parse(seed.generatedAt)) {
      publish(createGithubSnapshot({ ...cached }));
      nextRefreshAt = Date.parse(cached.generatedAt) + REFRESH_INTERVAL_MS;
      scheduleRefresh();
    } else {
      await refresh();
    }
  })();

  const wake = () => {
    if (page.visibilityState === "hidden") scheduleRefresh();
    else void refresh();
  };
  events.addEventListener("focus", wake);
  events.addEventListener("pageshow", wake);
  page.addEventListener("visibilitychange", wake);
  return {
    ready,
    refresh,
    stop() {
      stopped = true;
      events.clearTimeout(refreshTimer);
      events.removeEventListener("focus", wake);
      events.removeEventListener("pageshow", wake);
      page.removeEventListener("visibilitychange", wake);
    }
  };
}
