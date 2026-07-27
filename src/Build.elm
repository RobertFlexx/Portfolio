module Build exposing (main)

import Browser
import Html exposing (Html, a, button, code, div, footer, h1, h2, h3, header, i, main_, p, pre, section, span, strong, text)
import Html.Attributes exposing (attribute, class, classList, href, rel, target, type_)
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
        , update = \msg model ->
            case msg of
                SetView selected ->
                    ( { model | activeView = selected }, Cmd.none )
        , subscriptions = \_ -> Sub.none
        }


view : Model -> Html Msg
view model =
    div [ class "build-page" ]
        [ viewHeader
        , main_ []
            [ viewHero
            , viewConsole model
            , viewPipeline
            , viewScss
            , viewReceipt
            ]
        , viewFooter
        ]


viewHeader : Html Msg
viewHeader =
    header [ class "build-header" ]
        [ a [ class "build-header__back", href "index.html" ]
            [ span [ attribute "aria-hidden" "true" ] [ text "←" ]
            , text "BACK TO ROBERT"
            ]
        , p [] [ text "RF / BUILD MANIFEST" ]
        , a
            [ href "https://github.com/RobertFlexx"
            , target "_blank"
            , rel "noreferrer"
            ]
            [ text "GITHUB ↗" ]
        ]


viewHero : Html Msg
viewHero =
    section [ class "build-hero" ]
        [ div [ class "build-hero__copy" ]
            [ p [ class "build-kicker" ] [ text "VIEW SOURCE / WITHOUT VIEWING SOURCE" ]
            , h1 []
                [ span [] [ text "WHAT’S" ]
                , span [ class "build-hero__outline" ] [ text "UNDER" ]
                , span [] [ text "THE HOOD?" ]
                ]
            , p [ class "build-hero__lede" ]
                [ text "The short answer is "
                , span [] [ text "Elm + SCSS." ]
                , text " The longer answer is typed state, hand-built views, generated design rules, two compiled assets, and an unreasonable amount of attention to whether a one-pixel line feels horny enough."
                ]
            ]
        , div [ class "build-reactor", attribute "aria-label" "Animated technology stack diagram" ]
            [ div [ class "build-reactor__grid", attribute "aria-hidden" "true" ] []
            , div [ class "build-reactor__ring build-reactor__ring--one" ] []
            , div [ class "build-reactor__ring build-reactor__ring--two" ] []
            , div [ class "build-reactor__ring build-reactor__ring--three" ] []
            , div [ class "build-reactor__core" ]
                [ span [] [ text "STATIC" ]
                , strong [] [ text "RF" ]
                , span [] [ text "BUILD" ]
                ]
            , reactorNode "ELM" "VIEW + STATE" "reactor-node--elm"
            , reactorNode "SCSS" "SYSTEM + MOTION" "reactor-node--scss"
            , reactorNode "HTML" "ENTRY + META" "reactor-node--html"
            , div [ class "build-reactor__status" ]
                [ span [] []
                , text "NO SERVER REQUIRED"
                ]
            ]
        ]


reactorNode : String -> String -> String -> Html Msg
reactorNode name description className =
    div [ class ("reactor-node " ++ className) ]
        [ strong [] [ text name ]
        , span [] [ text description ]
        ]


viewConsole : Model -> Html Msg
viewConsole model =
    section [ class "build-console-section" ]
        [ div [ class "build-section-heading" ]
            [ p [ class "build-kicker" ] [ text "01 / INSPECT THE MACHINE" ]
            , h2 [] [ text "No mystery meat." ]
            , p [] [ text "Switch views. The architecture is small enough to hold in your head, which is sexier than a dependency tree shaped like public transport." ]
            ]
        , div [ class "build-console" ]
            [ div [ class "build-console__tabs", attribute "role" "tablist" ]
                [ consoleTab model.activeView Architecture "ARCHITECTURE"
                , consoleTab model.activeView ElmSource "MAIN.ELM"
                , consoleTab model.activeView ScssSource "STYLES.SCSS"
                ]
            , div [ class "build-console__screen" ]
                [ viewConsolePanel model.activeView ]
            , div [ class "build-console__footer" ]
                [ span [] [ text "ELM 0.19.2" ]
                , span [] [ text "SCSS / LIBSASS" ]
                , span [ class "build-console__online" ] [ text "COMPILED CLEAN" ]
                ]
            ]
        ]


consoleTab : ViewMode -> ViewMode -> String -> Html Msg
consoleTab active value label =
    button
        [ classList
            [ ( "build-console__tab", True )
            , ( "build-console__tab--active", active == value )
            ]
        , type_ "button"
        , onClick (SetView value)
        , attribute "role" "tab"
        , attribute "aria-selected" (boolString (active == value))
        ]
        [ text label ]


viewConsolePanel : ViewMode -> Html Msg
viewConsolePanel active =
    case active of
        Architecture ->
            div [ class "architecture-panel panel-enter" ]
                [ architectureLayer "01" "MODEL" "One explicit record holds the active project filter and mobile navigation state."
                , architectureLink
                , architectureLayer "02" "UPDATE" "Messages are boring on purpose: filter, open, close. Predictable beats clever."
                , architectureLink
                , architectureLayer "03" "VIEW" "Elm renders semantic HTML from typed data for projects, games, languages, and repository signals."
                , architectureLink
                , architectureLayer "04" "STATIC OUTPUT" "The compiler produces main.js. A static host serves it beside styles.css and index.html."
                ]

        ElmSource ->
            codePanel
                [ ( "01", "type Msg" )
                , ( "02", "    = SetFilter Filter" )
                , ( "03", "    | ToggleMenu" )
                , ( "04", "    | CloseMenu" )
                , ( "05", "" )
                , ( "06", "update msg model =" )
                , ( "07", "    case msg of" )
                , ( "08", "        SetFilter selected ->" )
                , ( "09", "            ( { model | activeFilter = selected }, Cmd.none )" )
                , ( "10", "" )
                , ( "11", "        ToggleMenu ->" )
                , ( "12", "            ( { model | menuOpen = not model.menuOpen }, Cmd.none )" )
                ]

        ScssSource ->
            codePanel
                [ ( "01", "$language-colors: (" )
                , ( "02", "  \"cpp\": $blue," )
                , ( "03", "  \"nim\": $acid," )
                , ( "04", "  \"glsl\": $violet" )
                , ( "05", ");" )
                , ( "06", "" )
                , ( "07", "@each $language, $color in $language-colors {" )
                , ( "08", "  .language--#{$language} {" )
                , ( "09", "    --language-color: #{$color};" )
                , ( "10", "  }" )
                , ( "11", "}" )
                , ( "12", "write the rule once; let Sass do the repetitive touching" )
                ]


architectureLayer : String -> String -> String -> Html Msg
architectureLayer index title copy =
    div [ class "architecture-layer" ]
        [ span [] [ text index ]
        , div []
            [ h3 [] [ text title ]
            , p [] [ text copy ]
            ]
        ]


architectureLink : Html Msg
architectureLink =
    div [ class "architecture-link", attribute "aria-hidden" "true" ]
        [ span [] [], span [] [], span [] [] ]


codePanel : List ( String, String ) -> Html Msg
codePanel lines =
    pre [ class "code-panel panel-enter" ]
        [ code [] (List.map codeLine lines) ]


codeLine : ( String, String ) -> Html Msg
codeLine ( number, source ) =
    span [ class "code-line" ]
        [ span [ class "code-line__number" ] [ text number ]
        , span [ class "code-line__source" ] [ text source ]
        ]


viewPipeline : Html Msg
viewPipeline =
    section [ class "build-pipeline" ]
        [ div [ class "build-section-heading build-section-heading--dark" ]
            [ p [ class "build-kicker" ] [ text "02 / BUILD PIPELINE" ]
            , h2 [] [ text "Source goes in. Static comes out." ]
            , p [] [ text "No backend waiting to fall over. No database yearning for credentials. Just a deterministic little production line." ]
            ]
        , div [ class "pipeline-track" ]
            [ pipelineStage "01" "src/Main.elm" "CONTENT + INTERACTION" "pipeline-stage--elm"
            , pipelineArrow "elm make --optimize"
            , pipelineStage "02" "main.js" "TYPED APP / COMPILED" "pipeline-stage--output"
            , pipelineJoin
            , pipelineStage "03" "src/styles.scss" "TOKENS + MOTION" "pipeline-stage--scss"
            , pipelineArrow "sassc -t compressed"
            , pipelineStage "04" "styles.css" "28 KB / COMPRESSED" "pipeline-stage--output"
            , pipelineJoin
            , pipelineStage "05" "static host" "SERVE THE FILES" "pipeline-stage--deploy"
            ]
        ]


pipelineStage : String -> String -> String -> String -> Html Msg
pipelineStage index name description className =
    div [ class ("pipeline-stage " ++ className) ]
        [ span [ class "pipeline-stage__index" ] [ text index ]
        , h3 [] [ text name ]
        , p [] [ text description ]
        , div [ class "pipeline-stage__pulse", attribute "aria-hidden" "true" ] []
        ]


pipelineArrow : String -> Html Msg
pipelineArrow label =
    div [ class "pipeline-arrow", attribute "aria-hidden" "true" ]
        [ span [] [ text label ]
        , div [] [ i [] [], i [] [], i [] [] ]
        ]


pipelineJoin : Html Msg
pipelineJoin =
    div [ class "pipeline-join", attribute "aria-hidden" "true" ]
        [ span [] [], span [] [] ]


viewScss : Html Msg
viewScss =
    section [ class "scss-showcase" ]
        [ div [ class "build-section-heading" ]
            [ p [ class "build-kicker" ] [ text "03 / SCSS, ACTUALLY USED" ]
            , h2 [] [ text "Not CSS wearing a fake moustache." ]
            , p [] [ text "The stylesheet uses Sass as a design tool, not just as a file extension somebody forgot to remove." ]
            ]
        , div [ class "scss-grid" ]
            [ scssCard "01" "TOKENS" "$acid: #d8ff45;" "One palette drives the entire visual system."
            , scssCard "02" "MAPS + LOOPS" "@each $language..." "Language themes are generated from a color map."
            , scssCard "03" "MIXINS" "@include below(...)" "Responsive rules stay readable at three real breakpoints."
            , scssCard "04" "FUNCTIONS" "rem($pixels)" "Measurements use a small conversion function instead of calculator foreplay."
            , scssCard "05" "PLACEHOLDERS" "%micro-label" "Repeated typography is extended without class soup."
            , scssCard "06" "MOTION" "@keyframes..." "Entrance, orbit, ticker, scan, hover, and reduced-motion behavior."
            ]
        ]


scssCard : String -> String -> String -> String -> Html Msg
scssCard index title snippet copy =
    div [ class "scss-card" ]
        [ div [ class "scss-card__top" ]
            [ span [] [ text index ]
            , span [] [ text title ]
            ]
        , code [] [ text snippet ]
        , p [] [ text copy ]
        ]


viewReceipt : Html Msg
viewReceipt =
    section [ class "build-receipt" ]
        [ div [ class "build-receipt__copy" ]
            [ p [ class "build-kicker" ] [ text "04 / THE RECEIPT" ]
            , h2 [] [ text "Small stack. Full experience." ]
            , p []
                [ text "The page is static, but it is not dead. Elm owns the interactions. SCSS owns the visual behavior. The browser does what browsers are already extremely good at. Everyone leaves satisfied." ]
            , a [ href "index.html" ]
                [ text "BACK TO THE PORTFOLIO"
                , span [ attribute "aria-hidden" "true" ] [ text "→" ]
                ]
            ]
        , div [ class "receipt-grid" ]
            [ receiptItem "0" "BACKEND SERVICES"
            , receiptItem "0" "RUNTIME API CALLS"
            , receiptItem "2" "COMPILED ASSETS"
            , receiptItem "100%" "HAND-DIRECTED"
            ]
        , div [ class "build-receipt__stamp", attribute "aria-hidden" "true" ]
            [ span [] [ text "COMPILED" ]
            , strong [] [ text "CLEAN" ]
            , span [] [ text "26.07.2026" ]
            ]
        ]


receiptItem : String -> String -> Html Msg
receiptItem value label =
    div [ class "receipt-item" ]
        [ span [] [ text value ]
        , p [] [ text label ]
        ]


viewFooter : Html Msg
viewFooter =
    footer [ class "build-footer" ]
        [ p [] [ text "ROBERT FLEXX / BUILD MANIFEST" ]
        , p [] [ text "ELM + SCSS + QUESTIONABLE RESTRAINT" ]
        , a [ href "index.html" ] [ text "PORTFOLIO →" ]
        ]


boolString : Bool -> String
boolString value =
    if value then
        "true"

    else
        "false"
