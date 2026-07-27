#!/usr/bin/env sh
set -eu

ELM_BIN="${ELM_BIN:-./node_modules/.bin/elm}"
ELM_HOME="${ELM_HOME:-./.elm-cache}"
export ELM_HOME

"$ELM_BIN" make src/Main.elm --optimize --output=main.js
"$ELM_BIN" make src/Build.elm --optimize --output=build-page.js
sassc -t compressed src/styles.scss styles.css

echo "Built main.js, build-page.js, and styles.css"
