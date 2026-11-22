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

Pinned repositories, star counts, repository totals, and language totals are pulled from GitHub's GraphQL API during deployment. The Pages workflow refreshes the public snapshot every six hours; no API token is shipped to the browser.

## Birthday themes

The portfolio shows a greeting on Robert's birthday (November 21), Kokonico's (October 24), and shawarma10's (July 28). Each uses the visitor's local date. Friend cards get a cake, birthday greeting, and party trim on their birthday.

Dates refresh at local midnight, when the page regains focus, and when it returns from the background or browser history. A minute check also picks up timezone and clock changes while the page stays open.

Run `npm run test:birthdays` to check the dates across the available IANA timezones, midnight rollovers, and page wake events.
