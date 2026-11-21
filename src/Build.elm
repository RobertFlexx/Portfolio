module Build exposing (main)

import Browser
import Html exposing (Html, a, button, code, div, footer, h1, h2, h3, header, main_, p, pre, section, span, text)
import Html.Attributes exposing (attribute, class, classList, href, id, rel, target, type_)
import Html.Events exposing (onClick)


type ViewMode
    = Architecture
    | ElmSource
    | ScssSource


type alias Model =
    { activeView : ViewMode }


type Msg
    = SetView ViewMode


main : Program () Model Msg
main =
    Browser.element
        { init = \_ -> ( { activeView = Architecture }, Cmd.none )
        , view = view
        , update =
            \(SetView selected) model ->
                ( { model | activeView = selected }, Cmd.none )
        , subscriptions = \_ -> Sub.none
        }


view : Model -> Html Msg
view model =
    div [ class "build-page" ]
        [ a [ class "skip-link", href "#main-content" ] [ text "Skip to content" ]
        , header [ class "build-header" ]
            [ a [ href "index.html" ] [ text "Robert Flexx" ]
            , p [] [ text "About this site" ]
            , a [ href "https://github.com/RobertFlexx/Portfolio", target "_blank", rel "noreferrer" ] [ text "View source" ]
            ]
        , main_ [ id "main-content", attribute "tabindex" "-1" ]
            [ section [ class "build-hero" ]
                [ p [ class "kicker" ] [ text "About this site" ]
                , h1 [] [ text "What runs this thing." ]
                , p [ class "build-hero__lede" ] [ text "Elm, SCSS, and files on GitHub Pages. Here's the code if you want to poke around." ]
                ]
            , viewConsole model
            , viewFiles
            , viewDecisions
            , section [ class "build-section build-section--surface" ]
                [ p [ class "kicker" ] [ text "Build it yourself" ]
                , h2 [] [ text "The source is on GitHub." ]
                , p [] [ text "Install the dependencies, compile the Elm and SCSS, then serve the directory. The repository includes the pages, the raylib game, and the GitHub snapshot script." ]
                , div [ class "build-console" ]
                    [ pre [ class "code-panel build-console__screen" ] [ code [] [ text "npm ci\nnpm run build\nnpm run serve" ] ] ]
                , a [ class "build-source-link", href "https://github.com/RobertFlexx/Portfolio", target "_blank", rel "noreferrer" ] [ text "Open RobertFlexx / Portfolio" ]
                ]
            ]
        , footer [ class "footer" ]
            [ p [] [ text "© 2026 Robert Flexx" ]
            , p [] [ text "Made with Elm & SCSS" ]
            , div [ class "footer__links" ] [ a [ href "index.html" ] [ text "Back to the portfolio" ], a [ href "raylib.html" ] [ text "Raylib & little ship" ] ]
            ]
        ]


viewConsole : Model -> Html Msg
viewConsole model =
    section [ class "build-section" ]
        [ p [ class "kicker" ] [ text "How it works" ]
        , h2 [] [ text "Views, state, and a stylesheet." ]
        , p [] [ text "The portfolio keeps its filter, navigation, and GitHub data in one Elm model. Select a view to see the structure or a short source example." ]
        , div [ class "build-console" ]
            [ div [ class "build-console__tabs", attribute "role" "group", attribute "aria-label" "Source preview" ]
                [ consoleTab model.activeView Architecture "Overview"
                , consoleTab model.activeView ElmSource "Main.elm"
                , consoleTab model.activeView ScssSource "styles.scss"
                ]
            , div [ class "build-console__screen", id "source-preview" ] [ viewPanel model.activeView ]
            , div [ class "build-console__footer" ] [ span [] [ text "Elm 0.19.2" ], span [] [ text "Dart Sass" ], span [] [ text "Static HTML & JavaScript" ] ]
            ]
        ]


consoleTab : ViewMode -> ViewMode -> String -> Html Msg
consoleTab active value label =
    button
        [ classList [ ( "build-console__tab", True ), ( "build-console__tab--active", active == value ) ]
        , type_ "button"
        , onClick (SetView value)
        , attribute "aria-pressed"
            (if active == value then
                "true"

             else
                "false"
            )
        , attribute "aria-controls" "source-preview"
        ]
        [ text label ]


viewPanel : ViewMode -> Html Msg
viewPanel active =
    case active of
        Architecture ->
            div [ class "architecture-panel" ]
                [ architectureLayer "Model" "Stores the selected project filter, whether the mobile menu is open, and the decoded GitHub snapshot."
                , architectureLayer "Update" "Receives messages when someone filters the projects, toggles the menu, or loads the snapshot."
                , architectureLayer "View" "Renders the page from typed records for projects, games, languages, and friends."
                , architectureLayer "Build" "Compiles Elm into JavaScript and SCSS into CSS. A scheduled workflow refreshes the public GitHub snapshot every six hours."
                ]

        ElmSource ->
            pre [ class "code-panel" ]
                [ code []
                    [ text "type Msg\n    = SetFilter Filter\n    | ToggleMenu\n    | CloseMenu\n    | DismissMenu\n    | FocusReturned\n    | ReceiveGithubData Decode.Value\n\nupdate msg model =\n    case msg of\n        SetFilter selected ->\n            ( { model | activeFilter = selected }\n            , Cmd.none\n            )\n\n        -- Other messages follow the same pattern."
                    ]
                ]

        ScssSource ->
            pre [ class "code-panel" ]
                [ code []
                    [ text "$language-colors: (\n  \"cpp\": #9ac5e8,\n  \"nim\": #d7cb86,\n  \"glsl\": #91c8b1\n);\n\n@each $language, $color in $language-colors {\n  .language--#{$language} {\n    --language-color: #{$color};\n  }\n}"
                    ]
                ]


architectureLayer : String -> String -> Html Msg
architectureLayer title copy =
    div [ class "architecture-layer" ] [ h3 [] [ text title ], p [] [ text copy ] ]


viewFiles : Html Msg
viewFiles =
    section [ class "build-section build-section--surface" ]
        [ p [ class "kicker" ] [ text "Inside the repository" ]
        , h2 [] [ text "A few files do most of the work." ]
        , div [ class "build-files" ]
            [ buildFile "src/Main.elm" "The portfolio's content, project filters, mobile navigation, and GitHub data decoder."
            , buildFile "src/Build.elm" "This page, including the source preview above."
            , buildFile "src/styles.scss" "Shared colors, typography, responsive layouts, and the birthday themes."
            , buildFile "index.html" "The Elm entry point, page metadata, and date-based birthday selection."
            , buildFile "raylib.html & raylib-game.js" "The raylib page and little ship, using a locally hosted WebAssembly runtime."
            , buildFile "scripts/fetch-github-data.mjs" "Fetches public repository data during deployment. The browser receives JSON without an API token."
            ]
        ]


buildFile : String -> String -> Html Msg
buildFile filename copy =
    div [ class "build-file" ] [ code [] [ text filename ], p [] [ text copy ] ]


viewDecisions : Html Msg
viewDecisions =
    section [ class "build-section" ]
        [ p [ class "kicker" ] [ text "A few choices" ]
        , h2 [] [ text "Keep the moving parts small." ]
        , div [ class "decision-ledger" ]
            [ decision "Static hosting" "There is no application server or database. All pages can be served from a regular static host."
            , decision "Fresh data at build time" "GitHub Actions refreshes repository pins, language counts, and stars every six hours. A built-in snapshot is available if the request fails."
            , decision "Layouts that can reflow" "Flexible columns, wrapping navigation, and shared page margins keep the layout usable at different widths and text sizes."
            , decision "A little celebration" "Birthday greetings appear on the day. Robert's and Kokonico's use the visitor's local date; Moritisimor's uses the date in Berlin."
            ]
        ]


decision : String -> String -> Html Msg
decision title copy =
    div [ class "decision-row" ] [ h3 [] [ text title ], p [] [ text copy ] ]
