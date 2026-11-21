import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert(script, "The birthday script must be present in index.html");

const birthdays = [
  { className: "moritisimor-birthday", month: 7, day: 28 },
  { className: "kokonico-birthday", month: 10, day: 24 },
  { className: "robert-birthday", month: 11, day: 21 }
];

function pageAt(instant) {
  let clock = new Date(instant).getTime();
  let timerId = 0;
  const active = new Set();
  const timers = new Map();
  const windowEvents = new Map();
  const documentEvents = new Map();
  const document = {
    visibilityState: "visible",
    documentElement: {
      classList: {
        toggle(name, enabled) {
          if (enabled) active.add(name);
          else active.delete(name);
        }
      }
    },
    addEventListener: (event, callback) => documentEvents.set(event, callback)
  };

  class Clock extends Date {
    constructor(...args) {
      super(...(args.length ? args : [clock]));
    }

    static now() {
      return clock;
    }
  }

  vm.runInNewContext(script, {
    Date: Clock,
    document,
    window: {
      setTimeout(callback, delay) {
        timers.set(++timerId, { callback, delay });
        return timerId;
      },
      clearTimeout: (id) => timers.delete(id),
      addEventListener: (event, callback) => windowEvents.set(event, callback)
    }
  });

  return {
    active,
    timers,
    document,
    windowEvents,
    documentEvents,
    setTime: (instant) => { clock = new Date(instant).getTime(); },
    tick() {
      assert.equal(timers.size, 1, "Exactly one date refresh should be scheduled");
      const [id, timer] = timers.entries().next().value;
      assert(timer.delay >= 50 && timer.delay <= 60000);
      timers.delete(id);
      clock += timer.delay;
      timer.callback();
    }
  };
}

const originalTimezone = process.env.TZ;
const zones = [...new Set(["UTC", "Etc/GMT+12", ...Intl.supportedValuesOf("timeZone")])];
let checks = 0;

try {
  for (const timeZone of zones) {
    process.env.TZ = timeZone;
    const formatter = new Intl.DateTimeFormat("en-US", { timeZone, month: "numeric", day: "numeric" });

    for (const birthday of birthdays) {
      for (const instant of [
        Date.UTC(2026, birthday.month - 1, birthday.day - 1, 10, 1),
        Date.UTC(2026, birthday.month - 1, birthday.day, 0, 1),
        Date.UTC(2026, birthday.month - 1, birthday.day, 12, 1),
        Date.UTC(2026, birthday.month - 1, birthday.day + 1, 11, 59)
      ]) {
        const parts = formatter.formatToParts(instant);
        const month = Number(parts.find((part) => part.type === "month").value);
        const day = Number(parts.find((part) => part.type === "day").value);
        const expected = birthdays.filter((entry) => entry.month === month && entry.day === day).map((entry) => entry.className);
        assert.deepEqual([...pageAt(instant).active], expected, `${timeZone}: ${new Date(instant).toISOString()}`);
        checks += 1;
      }

      const start = new Date(2026, birthday.month - 1, birthday.day).getTime();
      const before = pageAt(start - 100);
      assert.equal(before.active.size, 0);
      before.tick();
      assert.deepEqual([...before.active], [birthday.className], `${timeZone}: start of birthday`);

      const end = new Date(2026, birthday.month - 1, birthday.day + 1).getTime();
      const during = pageAt(end - 100);
      assert.deepEqual([...during.active], [birthday.className]);
      during.tick();
      assert.equal(during.active.size, 0, `${timeZone}: end of birthday`);
      checks += 2;
    }
  }

  process.env.TZ = "UTC";
  const page = pageAt("2026-07-28T00:30:00Z");
  assert(page.active.has("moritisimor-birthday"));

  process.env.TZ = "Pacific/Honolulu";
  page.windowEvents.get("focus")();
  assert.equal(page.active.size, 0, "A timezone change to July 27 removes the birthday");

  process.env.TZ = "Pacific/Kiritimati";
  page.windowEvents.get("pageshow")();
  assert(page.active.has("moritisimor-birthday"), "History restoration uses the current timezone");

  page.document.visibilityState = "hidden";
  page.setTime("2026-07-29T00:30:00Z");
  page.documentEvents.get("visibilitychange")();
  page.document.visibilityState = "visible";
  page.documentEvents.get("visibilitychange")();
  assert.equal(page.active.size, 0, "Waking a background tab removes yesterday's birthday");

  page.setTime("2026-10-24T00:30:00Z");
  page.windowEvents.get("focus")();
  assert.deepEqual([...page.active], ["kokonico-birthday"], "Clock changes use the current date");
  assert.equal(page.timers.size, 1, "Wake events must not create duplicate refresh loops");
  console.log(`Passed ${checks} birthday checks across ${zones.length} timezones, plus clock, timezone, and tab-wake checks.`);
} finally {
  if (originalTimezone === undefined) delete process.env.TZ;
  else process.env.TZ = originalTimezone;
}
