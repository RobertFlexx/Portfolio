port module Main exposing (main)

import Browser
import Html exposing (Html, a, article, button, div, footer, h1, h2, h3, header, i, main_, nav, p, section, small, span, strong, text)
import Html.Attributes exposing (attribute, class, classList, href, id, rel, style, target, type_)
import Html.Events exposing (onClick)
import Json.Decode as Decode exposing (Decoder)


type Filter
    = All
    | Systems
    | Tools
    | Games


type alias Model =
    { activeFilter : Filter
    , menuOpen : Bool
    , github : Maybe GithubData
    }


type Msg
    = SetFilter Filter
    | ToggleMenu
    | CloseMenu
    | ReceiveGithubData Decode.Value


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


type alias GithubRepo =
    { name : String
    , description : String
    , language : String
    , stars : Int
    , url : String
    }


type alias GithubData =
    { generatedAt : String
    , publicRepoCount : Int
    , totalStars : Int
    , primaryLanguageCount : Int
    , pinned : List GithubRepo
    , topRepositories : List GithubRepo
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


port githubDataReceived : (Decode.Value -> msg) -> Sub msg


main : Program () Model Msg
main =
    Browser.element
        { init = \_ -> ( { activeFilter = All, menuOpen = False, github = Nothing }, Cmd.none )
        , view = view
        , update = update
        , subscriptions = \_ -> githubDataReceived ReceiveGithubData
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

        ReceiveGithubData value ->
            case Decode.decodeValue githubDataDecoder value of
                Ok github ->
                    ( { model | github = Just github }, Cmd.none )

                Err _ ->
                    ( model, Cmd.none )


view : Model -> Html Msg
view model =
    div [ class "site-shell" ]
        [ viewHeader model
        , main_ []
            [ viewHero
            , viewTicker
            , viewProvenance
            , viewProjects model
            , viewTraction model.github
            , viewGameDev
            , viewAbout
            , viewRepoLab model.github
            , viewLanguages model.github
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
                , href "build.html"
                , onClick CloseMenu
                ]
                [ span [ class "site-nav__index" ] [ text "05" ]
                , text "This site"
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
    section [ class "provenance", attribute "aria-label" "Build provenance statement" ]
        [ div [ class "provenance__stamp", attribute "aria-hidden" "true" ]
            [ span [] [ text "HAND" ]
            , strong [] [ text "BUILT" ]
            , span [] [ text "SITE" ]
            ]
        , div [ class "provenance__statement" ]
            [ p [ class "provenance__label" ] [ text "NO TEMPLATE / SOURCE IN THE OPEN" ]
            , h2 []
                [ span [] [ text "THE CODE IS PUBLIC." ]
                , span [] [ text "THE TASTE IS MINE." ]
                ]
            ]
        , div [ class "provenance__notes" ]
            [ p [] [ text "No template, no fake case studies, and no six-layer component abstraction built to center a div. The odd choices are deliberate; the source is there if you want receipts." ]
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
        selectedProjects =
            projectsFromGithub model.github

        visibleProjects =
            List.filter
                (\project ->
                    model.activeFilter == All || project.kind == model.activeFilter
                )
                selectedProjects
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
            [ filterButton model.activeFilter All (filterLabel "All" All selectedProjects)
            , filterButton model.activeFilter Systems (filterLabel "Systems" Systems selectedProjects)
            , filterButton model.activeFilter Tools (filterLabel "Tools" Tools selectedProjects)
            , filterButton model.activeFilter Games (filterLabel "Games" Games selectedProjects)
            ]
        , div [ class "project-list__head", attribute "aria-hidden" "true" ]
            [ span [] [ text "INDEX" ]
            , span [] [ text "PROJECT / COMMAND" ]
            , span [] [ text "WHAT IT DOES" ]
            , span [] [ text "STACK / SIGNAL" ]
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


filterLabel : String -> Filter -> List Project -> String
filterLabel label selected projectList =
    let
        count =
            if selected == All then
                List.length projectList

            else
                List.length (List.filter (\project -> project.kind == selected) projectList)
    in
    label ++ " / " ++ twoDigit count


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


viewTraction : Maybe GithubData -> Html Msg
viewTraction github =
    let
        rankedRepos =
            github
                |> Maybe.map .topRepositories
                |> Maybe.andThen nonEmptyList
                |> Maybe.withDefault tractionRepos

        spotlight =
            List.head rankedRepos
                |> Maybe.withDefault fallbackSpotlight

        maxStars =
            rankedRepos
                |> List.map .stars
                |> List.maximum
                |> Maybe.withDefault 1

        statValue accessor fallback =
            github
                |> Maybe.map accessor
                |> Maybe.withDefault fallback
                |> String.fromInt
    in
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
                [ githubStat (statValue .publicRepoCount 59) "PUBLIC REPOS"
                , githubStat (statValue .totalStars 137) "STARS EARNED"
                , githubStat (statValue .primaryLanguageCount 34) "PRIMARY LANGS"
                ]
            ]
        , div [ class "traction__body" ]
            [ div [ class "traction__spotlight" ]
                [ p [ class "traction__flag" ] [ text "MOST TRACTION" ]
                , div [ class "traction__big-number" ] [ text (String.fromInt spotlight.stars) ]
                , h3 [] [ text spotlight.name ]
                , p []
                    [ text (repoDetail spotlight) ]
                , a
                    [ href spotlight.url
                    , target "_blank"
                    , rel "noreferrer"
                    ]
                    [ text "Open the repo"
                    , span [ class "arrow", attribute "aria-hidden" "true" ] [ text "↗" ]
                    ]
                ]
            , div [ class "traction__ranking" ]
                (List.indexedMap (viewTractionRepo maxStars) rankedRepos)
            ]
        , p [ class "traction__snapshot" ]
            [ text (githubSnapshotLabel github) ]
        ]


githubStat : String -> String -> Html Msg
githubStat value label =
    div [ class "github-stat" ]
        [ span [] [ text value ]
        , p [] [ text label ]
        ]


viewTractionRepo : Int -> Int -> GithubRepo -> Html Msg
viewTractionRepo maxStars index repo =
    let
        meterWidth =
            max 4 (round (toFloat repo.stars / toFloat (max 1 maxStars) * 100))
    in
    a
        [ class "traction-row"
        , href repo.url
        , target "_blank"
        , rel "noreferrer"
        ]
        [ span [ class "traction-row__rank" ] [ text (twoDigit (index + 1)) ]
        , div [ class "traction-row__repo" ]
            [ h3 [] [ text repo.name ]
            , span [] [ text repo.language ]
            ]
        , div [ class "traction-row__meter", attribute "aria-hidden" "true" ]
            [ span [ class "traction-row__fill", style "--meter-width" (String.fromInt meterWidth ++ "%") ] [] ]
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
            , div [ class "origin-story" ]
                [ div [ class "origin-story__rail", attribute "aria-hidden" "true" ]
                    [ span []
                        [ span [] [ text "2018" ]
                        , small [] [ text "FIRST LINE" ]
                        ]
                    , i [] []
                    , span []
                        [ span [] [ text "2021" ]
                        , small [] [ text "THE WEB" ]
                        ]
                    ]
                , div [ class "origin-story__copy" ]
                    [ span [ class "origin-story__label" ] [ text "04TH GRADE / RUBY / ROBOTICS" ]
                    , h3 [] [ text "It started with a robot." ]
                    , p []
                        [ text "In 2018, fourth-grade me learned Ruby to script robotics. It was my first language, and the start of the whole thing. I moved into web development in 2021 and have been coding, breaking, learning, and building ever since." ]
                    ]
                ]
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


viewRepoLab : Maybe GithubData -> Html Msg
viewRepoLab github =
    let
        repoCount =
            github
                |> Maybe.map .publicRepoCount
                |> Maybe.withDefault 59
    in
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
            [ span [] [ text (String.fromInt repoCount ++ " PUBLIC REPOSITORIES") ]
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


viewLanguages : Maybe GithubData -> Html Msg
viewLanguages github =
    let
        languageCount =
            github
                |> Maybe.map .primaryLanguageCount
                |> Maybe.withDefault 34
    in
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
            , p [] [ text ("These are the regulars, not the body count. Public repos currently span " ++ String.fromInt languageCount ++ " primary languages because commitment issues can be productive.") ]
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
                [ text "Kokonico works across Python, backend systems, databases, and the web. Moritisimor is in Germany, calls code a paintbrush, and keeps making runtimes, virtual machines, CLI tools, and small useful things." ]
            ]
        , div [ class "web-friends__cards" ]
            [ viewKokonicoFriend
            , viewMoritisimorFriend
            ]
        ]


viewKokonicoFriend : Html Msg
viewKokonicoFriend =
    a
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


viewMoritisimorFriend : Html Msg
viewMoritisimorFriend =
    a
        [ class "friend-reference friend-reference--moritisimor"
        , href "https://github.com/Moritisimor/"
        , target "_blank"
        , rel "noreferrer"
        , attribute "aria-label" "Visit Moritisimor on GitHub"
        ]
        [ div [ class "friend-reference__flag", attribute "aria-hidden" "true" ]
            [ span [] []
            , span [] []
            , span [] []
            ]
        , div [ class "friend-reference__top" ]
            [ span [] [ text "FRIEND / 002" ]
            , span [ class "friend-reference__status" ] [ text "GERMANY / DE ↗" ]
            ]
        , div [ class "friend-reference__identity" ]
            [ span [ class "friend-reference__eyebrow" ] [ text "ARTIST WITH A COMPILER" ]
            , h3 []
                [ text "Moriti"
                , span [] [ text "simor" ]
                ]
            , p [] [ text "Go / Rust / Dart / C / runtimes and small tools" ]
            , div [ class "friend-reference__signals", attribute "aria-label" "Featured repositories" ]
                [ span [] [ text "SATURNJS" ]
                , span [] [ text "ATOMVM" ]
                , span [] [ text "CUPID" ]
                ]
            ]
        , div [ class "friend-reference__reveal friend-reference__reveal--germany" ]
            [ span [] [ text "I AM AN ARTIST AND CODE IS MY PAINTBRUSH." ]
            , strong [] [ text "OPEN GITHUB" ]
            , span [ class "friend-reference__big-arrow", attribute "aria-hidden" "true" ] [ text "↗" ]
            ]
        , div [ class "friend-reference__foot" ]
            [ span [] [ text "GITHUB.COM/MORITISIMOR" ]
            , span [] [ text "VIEW THE WORK" ]
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
                [ href "build.html" ]
                [ text "How it’s built →" ]
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
                [ href "https://github.com/Moritisimor/"
                , target "_blank"
                , rel "noreferrer"
                ]
                [ text "Moritisimor ↗" ]
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
      , stars = 7
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


pinnedProjectTemplates : List Project
pinnedProjectTemplates =
    [ { index = "000"
      , name = "rookcc"
      , command = "$ rcc source.c"
      , language = "PASCAL"
      , kind = Tools
      , summary = "A C compiler that brought its own linker."
      , detail = "A standalone C compiler with its own optimization toolchain and linker, built without invoking external tools."
      , url = "https://github.com/RobertFlexx/rookcc"
      , tone = "project--magenta"
      , stars = 0
      }
    , { index = "000"
      , name = "pawnasm"
      , command = "$ pawnasm input.asm"
      , language = "COMPONENT PASCAL"
      , kind = Tools
      , summary = "Assembles the old-fashioned way: alone."
      , detail = "A lean standalone Intel-syntax assembler supporting common NASM conventions and designed as an educational codebase."
      , url = "https://github.com/RobertFlexx/pawnasm"
      , tone = "project--red"
      , stars = 0
      }
    , { index = "000"
      , name = "knightlinker"
      , command = "$ kld main.o"
      , language = "ADA"
      , kind = Tools
      , summary = "Links without calling for backup."
      , detail = "A standalone Ada 2022 linker for the RookCC toolchain, resolving ELF64 objects and emitting multiple executable and record formats."
      , url = "https://github.com/RobertFlexx/knightlinker"
      , tone = "project--blue"
      , stars = 0
      }
    ]


tractionRepos : List GithubRepo
tractionRepos =
    [ { name = "fastfind"
      , description = "One static Nim binary doing fuzzy search, content filters, natural-language queries, semantic code search, and interactive selection. Apparently people also enjoy finding their files before they die of old age."
      , language = "NIM"
      , stars = 17
      , url = "https://github.com/RobertFlexx/fastfind"
      }
    , { name = "ObeliskOS"
      , description = "A standalone UNIX-like operating system built from nothing: custom kernel, userland direction, package ecosystem, and a deeply unreasonable amount of scope."
      , language = "C"
      , stars = 12
      , url = "https://github.com/RobertFlexx/ObeliskOS"
      }
    , { name = "rayscal"
      , description = "Early experimental raylib 6.0 bindings for Scala Native."
      , language = "SCALA"
      , stars = 7
      , url = "https://github.com/RobertFlexx/rayscal"
      }
    , { name = "RSH"
      , description = "A Ruby shell with built-ins, autosuggestions, history tools, aliases, scripting, and quality-of-life features."
      , language = "RUBY"
      , stars = 4
      , url = "https://github.com/RobertFlexx/RSH"
      }
    , { name = "UnixImage"
      , description = "A GTK and CLI disk-image writer for UNIX and UNIX-like systems."
      , language = "C / GTK"
      , stars = 4
      , url = "https://github.com/RobertFlexx/UnixImage"
      }
    ]


fallbackSpotlight : GithubRepo
fallbackSpotlight =
    { name = "fastfind"
    , description = "One static Nim binary doing fuzzy search, content filters, natural-language queries, semantic code search, and interactive selection. Apparently people also enjoy finding their files before they die of old age."
    , language = "NIM"
    , stars = 17
    , url = "https://github.com/RobertFlexx/fastfind"
    }


gameProjects : List GameProject
gameProjects =
    [ { index = "G.01"
      , name = "rayscal"
      , language = "SCALA / RAYLIB"
      , copy = "Scala Native bindings for raylib 6.0, making Scala put on game-dev clothes."
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


projectsFromGithub : Maybe GithubData -> List Project
projectsFromGithub github =
    case github |> Maybe.map .pinned |> Maybe.andThen nonEmptyList of
        Just pinnedRepos ->
            List.indexedMap githubRepoToProject pinnedRepos

        Nothing ->
            projects


githubRepoToProject : Int -> GithubRepo -> Project
githubRepoToProject index repo =
    let
        projectIndex =
            threeDigit (index + 1)

        liveDescription fallback =
            if String.isEmpty (String.trim repo.description) then
                fallback

            else
                repo.description
    in
    case findProject repo.name of
        Just template ->
            { template
                | index = projectIndex
                , name = repo.name
                , language = String.toUpper repo.language
                , detail = liveDescription template.detail
                , url = repo.url
                , stars = repo.stars
            }

        Nothing ->
            { index = projectIndex
            , name = repo.name
            , command = "$ open /" ++ String.toLower repo.name
            , language = String.toUpper repo.language
            , kind = Tools
            , summary = "Pinned now. Built to be opened."
            , detail = liveDescription "A current GitHub pin. Open the repository for the code, notes, and latest state of the experiment."
            , url = repo.url
            , tone = toneForIndex index
            , stars = repo.stars
            }


findProject : String -> Maybe Project
findProject repoName =
    (projects ++ pinnedProjectTemplates)
        |> List.filter (\project -> String.toLower project.name == String.toLower repoName)
        |> List.head


repoDetail : GithubRepo -> String
repoDetail repo =
    case findProject repo.name of
        Just project ->
            project.detail

        Nothing ->
            if String.isEmpty (String.trim repo.description) then
                "A public repository earning attention on GitHub. Open it for the code, context, and current state."

            else
                repo.description


toneForIndex : Int -> String
toneForIndex index =
    case modBy 9 index of
        0 ->
            "project--acid"

        1 ->
            "project--coral"

        2 ->
            "project--yellow"

        3 ->
            "project--magenta"

        4 ->
            "project--red"

        5 ->
            "project--blue"

        6 ->
            "project--violet"

        7 ->
            "project--green"

        _ ->
            "project--orange"


githubSnapshotLabel : Maybe GithubData -> String
githubSnapshotLabel github =
    case github of
        Just data ->
            "AUTOMATIC GITHUB SNAPSHOT / "
                ++ String.left 10 data.generatedAt
                ++ ": PINS + COUNTS REFRESH EVERY SIX HOURS."

        Nothing ->
            "PUBLIC GITHUB SNAPSHOT / CONNECTING TO THE LIVE FEED."


nonEmptyList : List a -> Maybe (List a)
nonEmptyList values =
    if List.isEmpty values then
        Nothing

    else
        Just values


githubDataDecoder : Decoder GithubData
githubDataDecoder =
    Decode.map6 GithubData
        (Decode.field "generatedAt" Decode.string)
        (Decode.field "publicRepoCount" Decode.int)
        (Decode.field "totalStars" Decode.int)
        (Decode.field "primaryLanguageCount" Decode.int)
        (Decode.field "pinned" (Decode.list githubRepoDecoder))
        (Decode.field "topRepositories" (Decode.list githubRepoDecoder))


githubRepoDecoder : Decoder GithubRepo
githubRepoDecoder =
    Decode.map5 GithubRepo
        (Decode.field "name" Decode.string)
        (Decode.field "description" Decode.string)
        (Decode.field "language" Decode.string)
        (Decode.field "stars" Decode.int)
        (Decode.field "url" Decode.string)


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


threeDigit : Int -> String
threeDigit value =
    if value < 10 then
        "00" ++ String.fromInt value

    else if value < 100 then
        "0" ++ String.fromInt value

    else
        String.fromInt value
