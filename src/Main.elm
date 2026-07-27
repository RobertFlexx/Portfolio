module Main exposing (main)

import Browser
import Html exposing (Html, a, article, button, div, footer, h1, h2, h3, header, main_, nav, p, section, span, strong, text)
import Html.Attributes exposing (attribute, class, classList, href, id, rel, target, type_)
import Html.Events exposing (onClick)


type Filter
    = All
    | Systems
    | Tools
    | Games


type alias Model =
    { activeFilter : Filter
    , menuOpen : Bool
    }


type Msg
    = SetFilter Filter
    | ToggleMenu
    | CloseMenu


type alias Project =
    { index : String
    , name : String
    , command : String
    , language : String
    , kind : Filter
    , summary : String
    , detail : String
    , url : String
    , tone : String
    , stars : Int
    }


type alias Language =
    { name : String
    , note : String
    , className : String
    }


type alias TractionRepo =
    { rank : String
    , name : String
    , language : String
    , stars : Int
    , signal : String
    , url : String
    }


type alias GameProject =
    { index : String
    , name : String
    , language : String
    , copy : String
    , url : String
    }


type alias LabRepo =
    { name : String
    , language : String
    , copy : String
    , url : String
    }


main : Program () Model Msg
main =
    Browser.element
        { init = \_ -> ( { activeFilter = All, menuOpen = False }, Cmd.none )
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SetFilter selected ->
            ( { model | activeFilter = selected }, Cmd.none )

        ToggleMenu ->
            ( { model | menuOpen = not model.menuOpen }, Cmd.none )

        CloseMenu ->
            ( { model | menuOpen = False }, Cmd.none )


view : Model -> Html Msg
view model =
    div [ class "site-shell" ]
        [ viewHeader model
        , main_ []
            [ viewHero
            , viewTicker
            , viewProvenance
            , viewProjects model
            , viewTraction
            , viewGameDev
            , viewAbout
            , viewRepoLab
            , viewLanguages
            , viewWebFriends
            , viewContact
            ]
        , viewFooter
        ]


viewHeader : Model -> Html Msg
viewHeader model =
    header [ class "site-header" ]
        [ a [ class "wordmark", href "#top", onClick CloseMenu, attribute "aria-label" "Robert Flexx, home" ]
            [ span [ class "wordmark__mark", attribute "aria-hidden" "true" ]
                [ span [] [ text "R" ]
                , span [] [ text "F" ]
                ]
            , span [ class "wordmark__text" ] [ text "ROBERT/FLEXX" ]
            ]
        , nav
            [ classList
                [ ( "site-nav", True )
                , ( "site-nav--open", model.menuOpen )
                ]
            , attribute "aria-label" "Primary navigation"
            , id "primary-navigation"
            ]
            [ navLink "#work" "01" "Work"
            , navLink "#games" "02" "Games"
            , navLink "#about" "03" "About"
            , a
                [ class "site-nav__link site-nav__link--raylib"
                , href "raylib.html"
                , target "_blank"
                , rel "noreferrer"
                , onClick CloseMenu
                ]
                [ span [ class "site-nav__index" ] [ text "04" ]
                , text "Raylib ♥"
                ]
            , a
                [ class "site-nav__link"
                , href "source.html"
                , target "_blank"
                , rel "noreferrer"
                , onClick CloseMenu
                ]
                [ span [ class "site-nav__index" ] [ text "05" ]
                , text "Source"
                ]
            , a
                [ class "site-nav__link site-nav__link--contact"
                , href "mailto:robertflexxgh@gmail.com"
                , onClick CloseMenu
                ]
                [ text "Start a thread"
                , span [ class "arrow", attribute "aria-hidden" "true" ] [ text "↗" ]
                ]
            ]
        , button
            [ classList
                [ ( "menu-toggle", True )
                , ( "menu-toggle--open", model.menuOpen )
                ]
            , type_ "button"
            , onClick ToggleMenu
            , attribute "aria-label"
                (if model.menuOpen then
                    "Close navigation"

                 else
                    "Open navigation"
                )
            , attribute "aria-expanded" (boolString model.menuOpen)
            , attribute "aria-controls" "primary-navigation"
            ]
            [ span [] []
            , span [] []
            ]
        ]


navLink : String -> String -> String -> Html Msg
navLink destination index label =
    a [ class "site-nav__link", href destination, onClick CloseMenu ]
        [ span [ class "site-nav__index" ] [ text index ]
        , text label
        ]


viewHero : Html Msg
viewHero =
    section [ class "hero", id "top" ]
            [ div [ class "hero__rail" ]
            [ span [] [ text "PORTFOLIO / 2026" ]
            , span [ class "hero__rail-line" ] []
            , span [] [ text "SYSTEMS / GAMES / BAD IDEAS" ]
            ]
        , div [ class "hero__title-wrap" ]
            [ p [ class "hero__eyebrow reveal reveal--1" ]
                [ span [ class "status-dot", attribute "aria-hidden" "true" ] []
                , text "Systems + game developer"
                ]
            , h1 [ class "hero__title", attribute "aria-label" "Robert Flexx" ]
                [ span [ class "hero__line hero__line--solid reveal reveal--2" ] [ text "ROBERT" ]
                , span [ class "hero__line hero__line--outline reveal reveal--3" ] [ text "FLEXX" ]
                ]
            ]
        , div [ class "hero__lower" ]
            [ div [ class "hero__intro reveal reveal--4" ]
                [ p [ class "hero__lede" ]
                    [ text "I make "
                    , span [] [ text "fast tools, strange systems, and games" ]
                    , text " that feel good in the hands. Tight loops, low overhead, and no bloated framework wheezing in the corner."
                    ]
                , div [ class "hero__actions" ]
                    [ a [ class "button button--primary", href "#work" ]
                        [ text "Inspect the work"
                        , span [ class "arrow", attribute "aria-hidden" "true" ] [ text "↓" ]
                        ]
                    , a
                        [ class "text-link"
                        , href "https://github.com/RobertFlexx"
                        , target "_blank"
                        , rel "noreferrer"
                        ]
                        [ text "github.com/RobertFlexx"
                        , span [ class "arrow", attribute "aria-hidden" "true" ] [ text "↗" ]
                        ]
                    ]
                ]
            , viewSystemPanel
            ]
        , div [ class "scroll-note", attribute "aria-hidden" "true" ]
            [ span [ class "scroll-note__line" ] []
            , text "SCROLL TO EXECUTE"
            ]
        ]


viewSystemPanel : Html Msg
viewSystemPanel =
    div [ class "system-panel reveal reveal--5", attribute "aria-label" "Current focus" ]
        [ div [ class "system-panel__top" ]
            [ span [] [ text "RF_SYS" ]
            , span [] [ text "BUILD 07.26" ]
            , span [ class "system-panel__live" ] [ text "LIVE" ]
            ]
        , div [ class "system-panel__body" ]
            [ div [ class "system-panel__visual", attribute "aria-hidden" "true" ]
                [ div [ class "orbit orbit--outer" ] []
                , div [ class "orbit orbit--inner" ] []
                , div [ class "orbit__core" ] [ text "RF" ]
                , span [ class "orbit__axis orbit__axis--x" ] []
                , span [ class "orbit__axis orbit__axis--y" ] []
                ]
            , div [ class "system-panel__readout" ]
                [ div [] [ span [] [ text "FOCUS" ], p [] [ text "UNIX / CLI / SYSTEMS" ] ]
                , div [] [ span [] [ text "ALSO" ], p [] [ text "GAMES / SHADERS / MODS" ] ]
                , div [] [ span [] [ text "STATUS" ], p [ class "blink" ] [ text "PROBABLY IN TOO DEEP_" ] ]
                ]
            ]
        , div [ class "system-panel__log" ]
            [ span [] [ text ">" ]
            , text " less bloat. more software."
            ]
        ]


viewTicker : Html Msg
viewTicker =
    div [ class "ticker", attribute "aria-label" "Areas of focus" ]
        [ div [ class "ticker__track" ]
            (List.repeat 2
                (span [ class "ticker__group" ]
                    [ span [] [ text "SYSTEMS PROGRAMMING" ]
                    , span [ class "ticker__glyph" ] [ text "✳" ]
                    , span [] [ text "COMMAND LINE TOOLS" ]
                    , span [ class "ticker__glyph" ] [ text "✳" ]
                    , span [] [ text "UNIX WORKFLOWS" ]
                    , span [ class "ticker__glyph" ] [ text "✳" ]
                    , span [] [ text "GAME DEVELOPMENT" ]
                    , span [ class "ticker__glyph" ] [ text "✳" ]
                    , span [] [ text "SHADERS + GRAPHICS" ]
                    , span [ class "ticker__glyph" ] [ text "✳" ]
                    , span [] [ text "WEIRD EXPERIMENTS" ]
                    , span [ class "ticker__glyph" ] [ text "✳" ]
                    ]
                )
            )
        ]


viewProvenance : Html Msg
viewProvenance =
    section [ class "provenance", attribute "aria-label" "Code provenance statement" ]
        [ div [ class "provenance__stamp", attribute "aria-hidden" "true" ]
            [ span [] [ text "ANTI" ]
            , strong [] [ text "AI SLOP" ]
            , span [] [ text "CODE" ]
            ]
        , div [ class "provenance__statement" ]
            [ p [ class "provenance__label" ] [ text "HUMAN-DIRECTED SOFTWARE / EST. BEFORE THE PROMPT ERA" ]
            , h2 []
                [ span [] [ text "MADE BEFORE AI WAS GOOD" ]
                , span [] [ text "AT WEBDEV." ]
                ]
            ]
        , div [ class "provenance__notes" ]
            [ p [] [ text "No generated startup perfume. No fake case studies. No six-layer component abstraction built to center a div." ]
            , div []
                [ span [] [ text "READABLE" ]
                , span [] [ text "DIRECT" ]
                , span [] [ text "ACTUALLY RUNS" ]
                ]
            ]
        ]


viewProjects : Model -> Html Msg
viewProjects model =
    let
        visibleProjects =
            List.filter
                (\project ->
                    model.activeFilter == All || project.kind == model.activeFilter
                )
                projects
    in
    section [ class "projects section-pad", id "work" ]
        [ div [ class "section-heading" ]
            [ div []
                [ p [ class "kicker" ] [ text "01 / SELECTED BUILDS" ]
                , h2 [] [ text "Software with fingerprints on it." ]
                ]
            , p [ class "section-heading__aside" ]
                [ text "No startup-founder perfume. These are real tools, operating-system experiments, and graphics work that compile, run, and occasionally misbehave in interesting ways." ]
            ]
        , div [ class "project-filters", attribute "aria-label" "Filter projects" ]
            [ filterButton model.activeFilter All "All / 09"
            , filterButton model.activeFilter Systems "Systems / 02"
            , filterButton model.activeFilter Tools "Tools / 05"
            , filterButton model.activeFilter Games "Games / 02"
            ]
        , div [ class "project-list" ]
            (List.map viewProject visibleProjects)
        ]


filterButton : Filter -> Filter -> String -> Html Msg
filterButton current value label =
    button
        [ classList
            [ ( "filter", True )
            , ( "filter--active", current == value )
            ]
        , type_ "button"
        , onClick (SetFilter value)
        , attribute "aria-pressed" (boolString (current == value))
        ]
        [ text label ]


viewProject : Project -> Html Msg
viewProject project =
    article [ class ("project " ++ project.tone) ]
        [ a
            [ class "project__link"
            , href project.url
            , target "_blank"
            , rel "noreferrer"
            , attribute "aria-label" (project.name ++ " on GitHub")
            ]
            [ div [ class "project__index" ] [ text project.index ]
            , div [ class "project__main" ]
                [ div [ class "project__title-row" ]
                    [ h3 [ class "project__name" ] [ text project.name ]
                    , span [ class "project__command" ] [ text project.command ]
                    ]
                , p [ class "project__summary" ] [ text project.summary ]
                ]
            , p [ class "project__detail" ] [ text project.detail ]
            , div [ class "project__meta" ]
                [ div [ class "project__signals" ]
                    [ span [ class "language-pill" ] [ text project.language ]
                    , span [ class "star-pill", attribute "aria-label" (String.fromInt project.stars ++ " GitHub stars") ]
                        [ text ("★ " ++ String.fromInt project.stars) ]
                    ]
                , span [ class "project__arrow", attribute "aria-hidden" "true" ] [ text "↗" ]
                ]
            ]
        ]


viewTraction : Html Msg
viewTraction =
    section [ class "traction section-pad", id "traction" ]
        [ div [ class "traction__intro" ]
            [ div []
                [ p [ class "kicker" ] [ text "02 / GITHUB SIGNAL" ]
                , h2 []
                    [ text "The work people "
                    , span [] [ text "actually noticed." ]
                    ]
                ]
            , div [ class "traction__stats" ]
                [ githubStat "44" "PUBLIC REPOS"
                , githubStat "126" "STARS EARNED"
                , githubStat "29" "PRIMARY LANGS"
                ]
            ]
        , div [ class "traction__body" ]
            [ div [ class "traction__spotlight" ]
                [ p [ class "traction__flag" ] [ text "MOST TRACTION" ]
                , div [ class "traction__big-number" ] [ text "17" ]
                , h3 [] [ text "fastfind" ]
                , p []
                    [ text "One static Nim binary doing fuzzy search, content filters, natural-language queries, semantic code search, and interactive selection. Apparently people also enjoy finding their files before they die of old age." ]
                , a
                    [ href "https://github.com/RobertFlexx/fastfind"
                    , target "_blank"
                    , rel "noreferrer"
                    ]
                    [ text "Open the repo"
                    , span [ class "arrow", attribute "aria-hidden" "true" ] [ text "↗" ]
                    ]
                ]
            , div [ class "traction__ranking" ]
                (List.map viewTractionRepo tractionRepos)
            ]
        , p [ class "traction__snapshot" ]
            [ text "PUBLIC GITHUB SNAPSHOT / 26 JUL 2026: COUNTS WILL MOVE; THE CODE SHOULD TOO." ]
        ]


githubStat : String -> String -> Html Msg
githubStat value label =
    div [ class "github-stat" ]
        [ span [] [ text value ]
        , p [] [ text label ]
        ]


viewTractionRepo : TractionRepo -> Html Msg
viewTractionRepo repo =
    a
        [ class "traction-row"
        , href repo.url
        , target "_blank"
        , rel "noreferrer"
        ]
        [ span [ class "traction-row__rank" ] [ text repo.rank ]
        , div [ class "traction-row__repo" ]
            [ h3 [] [ text repo.name ]
            , span [] [ text repo.language ]
            ]
        , div [ class "traction-row__meter", attribute "aria-hidden" "true" ]
            [ span [ class ("traction-row__fill traction-row__fill--" ++ repo.signal) ] [] ]
        , span [ class "traction-row__stars" ] [ text ("★ " ++ String.fromInt repo.stars) ]
        , span [ class "traction-row__arrow", attribute "aria-hidden" "true" ] [ text "↗" ]
        ]


viewGameDev : Html Msg
viewGameDev =
    section [ class "game-dev section-pad", id "games" ]
        [ div [ class "game-dev__heading" ]
            [ p [ class "kicker" ] [ text "03 / GAME DEVELOPMENT" ]
            , h2 []
                [ span [] [ text "I DO GAMES," ]
                , span [ class "game-dev__outline" ] [ text "NOT JUST GREP." ]
                ]
            , p []
                [ text "Graphics, engine plumbing, mods, tooling, and gameplay systems. The invisible machinery matters: frame time, input feel, iteration speed, and the tiny bit of black magic that makes pressing a button feel indecently good." ]
            ]
        , div [ class "game-dev__stage" ]
            [ viewGameViewport
            , div [ class "game-dev__projects" ]
                (List.map viewGameProject gameProjects)
            ]
        , div [ class "game-dev__footer" ]
            [ p []
                [ text "I like game code the same way I like systems code, and women: "
                , span [] [ text "hot, responsive, and not carrying sixteen gigabytes of emotional baggage." ]
                ]
            , a
                [ href "https://github.com/RobertFlexx?tab=repositories"
                , target "_blank"
                , rel "noreferrer"
                ]
                [ text "Dig through all the experiments ↗" ]
            ]
        ]


viewGameViewport : Html Msg
viewGameViewport =
    div [ class "game-viewport", attribute "aria-label" "Animated wireframe game-development graphic" ]
        [ div [ class "game-viewport__hud" ]
            [ span [] [ text "RF_RENDER / DEV" ]
            , span [ class "game-viewport__fps" ] [ text "144 FPS" ]
            ]
        , div [ class "game-viewport__world", attribute "aria-hidden" "true" ]
            [ div [ class "game-viewport__stars game-viewport__stars--far" ] []
            , div [ class "game-viewport__stars game-viewport__stars--near" ] []
            , div [ class "game-viewport__sun" ] []
            , div [ class "game-viewport__sun-glow" ] []
            , div [ class "game-viewport__mountains game-viewport__mountains--back" ] []
            , div [ class "game-viewport__mountains game-viewport__mountains--front" ] []
            , div [ class "game-viewport__horizon" ] []
            , div [ class "game-viewport__grid" ] []
            , div [ class "game-viewport__chrome" ]
                [ span [] [ text "SYNTHETIC" ]
                , strong [] [ text "HORIZON" ]
                ]
            , div [ class "game-viewport__scanlines" ] []
            ]
        , div [ class "game-viewport__readout" ]
            [ span [] [ text "POS 118.24 / 34.05" ]
            , span [] [ text "SHADER: HOT" ]
            , span [] [ text "V-SYNC: HELL NO" ]
            ]
        ]


viewGameProject : GameProject -> Html Msg
viewGameProject project =
    a
        [ class "game-project"
        , href project.url
        , target "_blank"
        , rel "noreferrer"
        ]
        [ div [ class "game-project__top" ]
            [ span [] [ text project.index ]
            , span [] [ text project.language ]
            ]
        , h3 [] [ text project.name ]
        , p [] [ text project.copy ]
        , span [ class "game-project__arrow", attribute "aria-hidden" "true" ] [ text "↗" ]
        ]


viewAbout : Html Msg
viewAbout =
    section [ class "about section-pad", id "about" ]
        [ div [ class "about__lead" ]
            [ p [ class "kicker" ] [ text "04 / THE PERSON IN THE TERMINAL" ]
            , h2 []
                [ text "Curious."
                , span [] [ text "Restless." ]
                , text "Shipping."
                ]
            ]
        , div [ class "about__body" ]
            [ p [ class "about__statement" ]
                [ text "I keep building because apparently my brain sees a perfectly usable tool and whispers, "
                , span [] [ text "“you could make that weirder.”" ]
                ]
            , p []
                [ text "I bounce between operating systems, shells, editors, file traversal, graphics, games, language experiments, and whatever else refuses to leave me alone at 2 a.m. I care about code you can read, behavior you can predict, and software that does not need a venture-capital bedtime story to justify existing. And sometimes I make fuck ass shit." ]
            , p [ class "about__aside-copy" ]
                [ text "My preferred relationship with software is simple: clear boundaries, low overhead, and no mysterious process still running the next morning." ]
            , div [ class "principles" ]
                [ principle "01" "Fast is a feature" "If the delay is visible, the implementation is flirting with the wrong abstraction."
                , principle "02" "Readable under pressure" "Future me should not need candles, wine, and three hours to understand the control flow."
                , principle "03" "Ship the damn thing" "A useful, imperfect binary beats a pristine idea doing nothing in a private branch."
                , principle "04" "Let it have a pulse" "Serious engineering can still swear, joke, and enjoy itself."
                ]
            ]
        , blockquoteView
        ]


principle : String -> String -> String -> Html Msg
principle index title description =
    div [ class "principle" ]
        [ span [ class "principle__index" ] [ text index ]
        , div []
            [ h3 [] [ text title ]
            , p [] [ text description ]
            ]
        ]


blockquoteView : Html Msg
blockquoteView =
    div [ class "axiom" ]
        [ div [ class "axiom__mark", attribute "aria-hidden" "true" ] [ text "∴" ]
        , p []
            [ span [] [ text "FROM AXIOMS," ]
            , span [] [ text "ORDER." ]
            ]
        , div [ class "axiom__coordinates" ]
            [ span [] [ text "R/F / 26" ]
            , span [] [ text "34.05° N / 118.24° W" ]
            ]
        ]


viewRepoLab : Html Msg
viewRepoLab =
    section [ class "repo-lab section-pad", id "lab" ]
        [ div [ class "section-heading" ]
            [ div []
                [ p [ class "kicker" ] [ text "05 / THE REST OF THE LAB" ]
                , h2 [] [ text "More repos. More rabbit holes." ]
                ]
            , p [ class "section-heading__aside" ]
                [ text "The headliners are only the polite part. The rest ranges from package managers and fake operating systems to an Assembly editor and a deliberately horrifying rm." ]
            ]
        , div [ class "repo-lab__grid" ]
            (List.indexedMap viewLabRepo labRepos)
        , a
            [ class "repo-lab__all"
            , href "https://github.com/RobertFlexx?tab=repositories"
            , target "_blank"
            , rel "noreferrer"
            ]
            [ span [] [ text "44 PUBLIC REPOSITORIES" ]
            , span [] [ text "OPEN THE WHOLE DRAWER ↗" ]
            ]
        ]


viewLabRepo : Int -> LabRepo -> Html Msg
viewLabRepo index repo =
    a
        [ class "lab-repo"
        , href repo.url
        , target "_blank"
        , rel "noreferrer"
        ]
        [ div [ class "lab-repo__top" ]
            [ span [] [ text (twoDigit (index + 1)) ]
            , span [] [ text repo.language ]
            ]
        , h3 [] [ text repo.name ]
        , p [] [ text repo.copy ]
        , span [ class "lab-repo__open", attribute "aria-hidden" "true" ] [ text "OPEN ↗" ]
        ]


viewLanguages : Html Msg
viewLanguages =
    section [ class "stack section-pad", id "stack" ]
        [ div [ class "section-heading section-heading--stack" ]
            [ div []
                [ p [ class "kicker" ] [ text "06 / WORKING LANGUAGES" ]
                , h2 [] [ text "Polyglot, not monogamous." ]
                ]
            , div [ class "stack__count" ]
                [ span [] [ text "10" ]
                , p [] [ text "IN ROTATION" ]
                ]
            ]
        , div [ class "language-grid" ]
            (List.indexedMap viewLanguage languages)
        , div [ class "stack__footnote" ]
            [ span [] [ text "*" ]
            , p [] [ text "These are the regulars, not the body count. Public repos currently span 29 primary languages because commitment issues can be productive." ]
            ]
        ]


viewLanguage : Int -> Language -> Html Msg
viewLanguage index language =
    div [ class ("language-card language--" ++ language.className) ]
        [ div [ class "language-card__top" ]
            [ span [ class "language-card__index" ] [ text (twoDigit (index + 1)) ]
            , span [ class "language-card__signal", attribute "aria-hidden" "true" ] []
            ]
        , p [ class "language-card__name" ] [ text language.name ]
        , p [ class "language-card__note" ] [ text language.note ]
        , div [ class "language-card__bar", attribute "aria-hidden" "true" ] [ span [] [] ]
        ]


viewWebFriends : Html Msg
viewWebFriends =
    section [ class "web-friends section-pad", id "friends" ]
        [ div [ class "web-friends__heading" ]
            [ p [ class "kicker" ] [ text "07 / GOOD PEOPLE ON THE WIRE" ]
            , h2 [] [ text "The internet is better with friends in it." ]
            , p []
                [ text "Kokonico builds with Python, backend systems, databases, and the web. Their portfolio also sends some love toward tedit, fastfind, and ObeliskOS, so consider this the packet coming back." ]
            ]
        , a
            [ class "friend-reference"
            , href "https://kokonico.me"
            , target "_blank"
            , rel "noreferrer"
            , attribute "aria-label" "Visit Kokonico's portfolio"
            ]
            [ div [ class "friend-reference__top" ]
                [ span [] [ text "FRIEND / 001" ]
                , span [ class "friend-reference__status" ] [ text "ONLINE ↗" ]
                ]
            , div [ class "friend-reference__identity" ]
                [ span [ class "friend-reference__eyebrow" ] [ text "KKNC WEBWEAR™" ]
                , h3 [] [ text "Kokonico" ]
                , p [] [ text "Python / backend / databases / web design" ]
                ]
            , div [ class "friend-reference__reveal" ]
                [ span [] [ text "IDEA BORROWED WITH LOVE" ]
                , strong [] [ text "GO SAY HELLO" ]
                , span [ class "friend-reference__big-arrow", attribute "aria-hidden" "true" ] [ text "↗" ]
                ]
            , div [ class "friend-reference__foot" ]
                [ span [] [ text "KOKONICO.ME" ]
                , span [] [ text "OPEN PORTFOLIO" ]
                ]
            ]
        ]


viewContact : Html Msg
viewContact =
    section [ class "contact section-pad", id "contact" ]
        [ p [ class "kicker" ] [ text "08 / OPEN A CONNECTION" ]
        , p [ class "contact__pre" ]
            [ span [ class "status-dot", attribute "aria-hidden" "true" ] []
            , text "Available for interesting problems and bad influences"
            ]
        , a [ class "contact__link", href "mailto:robertflexxgh@gmail.com" ]
            [ span [ class "contact__line" ] [ text "GOT A HARD" ]
            , span [ class "contact__line contact__line--outline" ]
                [ text "PROBLEM?"
                , span [ class "contact__arrow", attribute "aria-hidden" "true" ] [ text "↗" ]
                ]
            ]
        , div [ class "contact__meta" ]
            [ p [] [ text "Tell me what keeps you up at night. The software thing, ideally." ]
            , a [ href "mailto:robertflexxgh@gmail.com" ] [ text "robertflexxgh@gmail.com" ]
            ]
        ]


viewFooter : Html Msg
viewFooter =
    footer [ class "footer" ]
        [ div [ class "footer__monogram", attribute "aria-hidden" "true" ] [ text "RF" ]
        , p [] [ text "© 2026 ROBERT FLEXX" ]
        , p [] [ text "BUILT IN ELM + SCSS" ]
        , div [ class "footer__links" ]
            [ a [ href "#top" ] [ text "Top ↑" ]
            , a
                [ href "source.html"
                , target "_blank"
                , rel "noreferrer"
                ]
                [ text "Source code ↗" ]
            , a
                [ href "raylib.html"
                , target "_blank"
                , rel "noreferrer"
                ]
                [ text "Raylib ♥ ↗" ]
            , a
                [ href "https://kokonico.me"
                , target "_blank"
                , rel "noreferrer"
                ]
                [ text "Kokonico ↗" ]
            , a
                [ href "https://github.com/RobertFlexx"
                , target "_blank"
                , rel "noreferrer"
                ]
                [ text "GitHub ↗" ]
            ]
        ]


projects : List Project
projects =
    [ { index = "001"
      , name = "fastfind"
      , command = "$ ff \"what you meant\""
      , language = "NIM"
      , kind = Tools
      , summary = "Finds the file before find gets its pants on."
      , detail = "Fuzzy matching, content filters, natural-language queries, semantic code search, and interactive mode packed into one shamelessly capable static binary."
      , url = "https://github.com/RobertFlexx/fastfind"
      , tone = "project--acid"
      , stars = 17
      }
    , { index = "002"
      , name = "ObeliskOS"
      , command = "$ boot /obelisk"
      , language = "C / ASM"
      , kind = Systems
      , summary = "An OS born from pain, nightmares, and C."
      , detail = "A standalone UNIX-like operating system built from nothing: custom kernel, userland direction, package ecosystem, and the kind of scope creep that starts asking for its own bedroom."
      , url = "https://github.com/RobertFlexx/ObeliskOS"
      , tone = "project--coral"
      , stars = 12
      }
    , { index = "003"
      , name = "rayscal"
      , command = "$ scala-native run"
      , language = "SCALA"
      , kind = Games
      , summary = "Scala Native bindings that want to play."
      , detail = "Early experimental raylib 6.0 bindings for Scala Native, because game development gets more interesting when two ecosystems start touching."
      , url = "https://github.com/RobertFlexx/rayscal"
      , tone = "project--yellow"
      , stars = 6
      }
    , { index = "004"
      , name = "blockbox"
      , command = "$ blockbox --play"
      , language = "SCALA"
      , kind = Games
      , summary = "Cubes, code, and absolutely no rent."
      , detail = "A free and open-source block voxel game in Scala, with familiar terrain and a homegrown implementation underneath the pixels."
      , url = "https://github.com/RobertFlexx/blockbox"
      , tone = "project--magenta"
      , stars = 2
      }
    , { index = "005"
      , name = "RSH"
      , command = "$ srsh"
      , language = "RUBY"
      , kind = Systems
      , summary = "A Ruby shell with an actual personality."
      , detail = "Built-ins, autosuggestions, history tools, aliases, scripting, and the daily comforts Bash keeps making you beg for."
      , url = "https://github.com/RobertFlexx/RSH"
      , tone = "project--red"
      , stars = 4
      }
    , { index = "006"
      , name = "raid"
      , command = "$ raid / -time"
      , language = "ZIG"
      , kind = Tools
      , summary = "Goes deep, fast, and checks every directory."
      , detail = "Rigorous recursive traversal with performance neck-and-neck with fd. Hidden files included; raid is not here to pretend it did not see them."
      , url = "https://github.com/RobertFlexx/raid"
      , tone = "project--blue"
      , stars = 4
      }
    , { index = "007"
      , name = "tedit"
      , command = "$ tedit notes.txt"
      , language = "C++"
      , kind = Tools
      , summary = "Opens your files, not a situationship."
      , detail = "A small general-purpose CLI editor with classic workflow DNA, modern safety, and no interest in becoming a browser with a text box."
      , url = "https://github.com/RobertFlexx/tedit"
      , tone = "project--violet"
      , stars = 4
      }
    , { index = "008"
      , name = "UnixImage"
      , command = "$ uniximage disk.iso"
      , language = "C / GTK"
      , kind = Tools
      , summary = "Writes images across the UNIX family."
      , detail = "A GTK and CLI disk-image writer supporting a frankly indecent list of UNIX-like systems, image formats, and compressed archives."
      , url = "https://github.com/RobertFlexx/UnixImage"
      , tone = "project--green"
      , stars = 4
      }
    , { index = "009"
      , name = "Volt"
      , command = "$ volt get /api"
      , language = "ODIN"
      , kind = Tools
      , summary = "Gets, posts, and leaves."
      , detail = "A fast standalone HTTP client in Odin. Less surface area than curl, more capability than a one-night request, and absolutely no 200-option commitment ceremony."
      , url = "https://github.com/RobertFlexx/Volt"
      , tone = "project--orange"
      , stars = 4
      }
    ]


tractionRepos : List TractionRepo
tractionRepos =
    [ { rank = "01"
      , name = "fastfind"
      , language = "NIM"
      , stars = 17
      , signal = "100"
      , url = "https://github.com/RobertFlexx/fastfind"
      }
    , { rank = "02"
      , name = "ObeliskOS"
      , language = "C"
      , stars = 12
      , signal = "71"
      , url = "https://github.com/RobertFlexx/ObeliskOS"
      }
    , { rank = "03"
      , name = "rayscal"
      , language = "SCALA"
      , stars = 6
      , signal = "35"
      , url = "https://github.com/RobertFlexx/rayscal"
      }
    , { rank = "04"
      , name = "RSH"
      , language = "RUBY"
      , stars = 4
      , signal = "24"
      , url = "https://github.com/RobertFlexx/RSH"
      }
    , { rank = "05"
      , name = "UnixImage"
      , language = "C / GTK"
      , stars = 4
      , signal = "24"
      , url = "https://github.com/RobertFlexx/UnixImage"
      }
    ]


gameProjects : List GameProject
gameProjects =
    [ { index = "G.01"
      , name = "rayscal"
      , language = "SCALA / RAYLIB"
      , copy = "Scala Native bindings for raylib 6.0. Six stars and counting for making Scala put on game-dev clothes."
      , url = "https://github.com/RobertFlexx/rayscal"
      }
    , { index = "G.02"
      , name = "blockbox"
      , language = "SCALA"
      , copy = "A free and open-source block voxel game. Familiar cubes, unfamiliar implementation choices."
      , url = "https://github.com/RobertFlexx/blockbox"
      }
    , { index = "G.03"
      , name = "PlayboxLib"
      , language = "C"
      , copy = "A compact, robust TUI 2D game-engine library for making the terminal do things it was not warned about."
      , url = "https://github.com/RobertFlexx/PlayboxLib"
      }
    , { index = "G.04"
      , name = "GLSL Hallway"
      , language = "GLSL"
      , copy = "A raw shader that is both the game map and a ray-traced GPU benchmark. The hallway is hot; your GPU will be too."
      , url = "https://github.com/RobertFlexx/GLSL-Hallway-GPU-Benchmark"
      }
    , { index = "G.05"
      , name = "Minecraft mods"
      , language = "JAVA"
      , copy = "Minecart speed with the safeword removed, plus a value unlocker for people who think arbitrary caps are deeply unsexy."
      , url = "https://github.com/RobertFlexx/unlimited-minecart-speed"
      }
    ]


labRepos : List LabRepo
labRepos =
    [ { name = "FerriteOS"
      , language = "C++"
      , copy = "A whole fake UNIX-like OS in one process: filesystem, init, services, auth, packages, daemons, and safe ways to break everything."
      , url = "https://github.com/RobertFlexx/FerriteOS"
      }
    , { name = "DropNest"
      , language = "GLEAM"
      , copy = "Local-network file drops for links, notes, clipboard text, and files. No cloud account invited into the room."
      , url = "https://github.com/RobertFlexx/DropNest"
      }
    , { name = "Photon"
      , language = "RUBY"
      , copy = "A smart package manager inspired by Portage, entirely in Ruby and probably thinking about dependency graphs right now."
      , url = "https://github.com/RobertFlexx/Photon"
      }
    , { name = "pre-but-better"
      , language = "RUST"
      , copy = "Preview images, GIFs, and video directly in the terminal. Your shell can look; touching still costs extra."
      , url = "https://github.com/RobertFlexx/pre-but-better"
      }
    , { name = "mote"
      , language = "ASSEMBLY"
      , copy = "A super-light, dead-simple CLI text editor in GNU Assembly for when C feels suspiciously high-level."
      , url = "https://github.com/RobertFlexx/mote"
      }
    , { name = "DTOP"
      , language = "D"
      , copy = "A UNIX process manager with a friendly TUI. Finds needy processes and helps them let go."
      , url = "https://github.com/RobertFlexx/DTOP"
      }
    , { name = "JvmShell"
      , language = "SCALA"
      , copy = "A fully interactive Linux shell built around the JVM ecosystem. Java, Kotlin, and Scala are all invited."
      , url = "https://github.com/RobertFlexx/JvmShell"
      }
    , { name = "hrm"
      , language = "PASCAL"
      , copy = "A deliberately horrified replacement for rm. The name is a warning and also excellent product positioning."
      , url = "https://github.com/RobertFlexx/hrm"
      }
    , { name = "system-lens"
      , language = "VALA"
      , copy = "A clean GTK system monitor for looking directly at what your machine is doing behind your back."
      , url = "https://github.com/RobertFlexx/system-lens"
      }
    , { name = "Nacre"
      , language = "PERL"
      , copy = "A system shell written in Perl. Because one shell was never going to satisfy this particular obsession."
      , url = "https://github.com/RobertFlexx/Nacre"
      }
    ]


languages : List Language
languages =
    [ { name = "C++", note = "SYSTEMS / TOOLS", className = "cpp" }
    , { name = "Ruby", note = "SHELLS / SCRIPTING", className = "ruby" }
    , { name = "Nim", note = "PERFORMANCE / CLI", className = "nim" }
    , { name = "C", note = "SYSTEMS / KERNELS", className = "c" }
    , { name = "Zig", note = "LOW-LEVEL / TOOLS", className = "zig" }
    , { name = "Odin", note = "NATIVE / EXPERIMENTS", className = "odin" }
    , { name = "Rust", note = "SYSTEMS / TOOLING", className = "rust" }
    , { name = "Scala", note = "GAMES / JVM / NATIVE", className = "scala" }
    , { name = "GLSL", note = "SHADERS / GRAPHICS", className = "glsl" }
    , { name = "Java", note = "MODS / JVM", className = "java" }
    ]


boolString : Bool -> String
boolString value =
    if value then
        "true"

    else
        "false"


twoDigit : Int -> String
twoDigit value =
    if value < 10 then
        "0" ++ String.fromInt value

    else
        String.fromInt value
