# Robert Flexx's portfolio

A static portfolio built with Elm and SCSS, with a raylib page and a small browser game.

## Local development

```sh
npm ci
npm run build
npm run serve
```

Open http://localhost:8000. The build uses the project-local Elm and Dart Sass compilers. Rebuild after editing Elm or SCSS.

## GitHub data

The site loads `github-data.json`, then refreshes public star counts, repository totals, language totals, and rankings directly from GitHub's REST API. Updates run on page load and every ten minutes while the page is visible. A recent response is cached locally to avoid unnecessary requests. Rate limits, offline visits, or unavailable storage keep the last known data usable.

The Pages workflow refreshes the saved snapshot and GitHub profile pins every six hours through GraphQL. No API token is shipped to the browser. Pins from organizations, such as Plainwire, also receive live star updates.

`EXTRA_REPOSITORIES` in `github-data.mjs` selects six additional featured projects. They appear after the profile pins, without duplicates. Project descriptions and filter categories live in `src/Main.elm`; star counts come from GitHub rather than the Elm catalog.

Run `npm run test:github` to check live updates, pagination, caching, rate limits, and fallback behavior.

## Birthday themes

The portfolio shows a greeting on Robert's birthday (November 21), Kokonico's (October 24), and shawarma10's (July 28). Each uses the visitor's local date. Friend cards get a cake, birthday greeting, and party trim on their birthday.

Dates refresh at local midnight, when the page regains focus, and when it returns from the background or browser history. A minute check also picks up timezone and clock changes while the page stays open.

Run `npm run test:birthdays` to check the dates across the available IANA timezones, midnight rollovers, and page wake events.
