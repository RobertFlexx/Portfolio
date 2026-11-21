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

The portfolio shows a greeting on Robert's birthday (November 21), Kokonico's (October 24), and Moritisimor's (July 28). The first two use the visitor's local date; Moritisimor's uses Europe/Berlin. Greetings update when the date changes, including when the page stays open overnight.
