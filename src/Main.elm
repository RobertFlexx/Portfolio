port module Main exposing (main)

import Browser
import Browser.Dom
import Browser.Events
import Html exposing (Html, a, article, button, code, div, footer, h1, h2, h3, header, img, main_, nav, p, section, span, strong, text)
import Html.Attributes exposing (alt, attribute, class, classList, height, href, id, rel, src, target, type_, width)
import Html.Events exposing (onClick)
import Json.Decode as Decode exposing (Decoder)
import Task


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
    | DismissMenu
    | FocusReturned
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
    , stars : Maybe Int
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
    , featured : List GithubRepo
    , status : String
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
        , subscriptions =
            \_ ->
                Sub.batch
                    [ githubDataReceived ReceiveGithubData
                    , Browser.Events.onKeyDown
                        (Decode.field "key" Decode.string
                            |> Decode.andThen
                                (\key ->
                                    if key == "Escape" then
                                        Decode.succeed DismissMenu

                                    else
                                        Decode.fail "Not an escape key"
                                )
                        )
                    ]
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

        DismissMenu ->
            if model.menuOpen then
                ( { model | menuOpen = False }
                , Browser.Dom.focus "menu-toggle" |> Task.attempt (\_ -> FocusReturned)
                )

            else
                ( model, Cmd.none )

        FocusReturned ->
            ( model, Cmd.none )

        ReceiveGithubData value ->
            case Decode.decodeValue githubDataDecoder value of
                Ok github ->
                    ( { model | github = Just github }, Cmd.none )

                Err _ ->
                    ( model, Cmd.none )


view : Model -> Html Msg
view model =
    div [ class "site-shell", id "top" ]
        [ a [ class "skip-link", href "#main-content" ] [ text "Skip to content" ]
        , viewHeader model
        , main_ [ id "main-content", attribute "tabindex" "-1" ]
            [ viewBirthdayNotes
            , viewHero
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
            [ span [ class "wordmark__mark", attribute "aria-hidden" "true" ] [ text "rf." ]
            , span [ class "wordmark__text" ] [ text "Robert Flexx" ]
            ]
        , button
            [ class "menu-toggle"
            , id "menu-toggle"
            , type_ "button"
            , onClick ToggleMenu
            , attribute "aria-expanded" (boolString model.menuOpen)
            , attribute "aria-controls" "primary-navigation"
            ]
            [ text
                (if model.menuOpen then
                    "Close"

                 else
                    "Menu"
                )
            , span [ classList [ ( "menu-toggle__icon", True ), ( "menu-toggle__icon--open", model.menuOpen ) ], attribute "aria-hidden" "true" ] []
            ]
        , nav
            [ classList [ ( "site-nav", True ), ( "site-nav--open", model.menuOpen ) ]
            , attribute "aria-label" "Primary navigation"
            , id "primary-navigation"
            ]
            [ navLink "#work" "Work"
            , navLink "#games" "Games"
            , navLink "#about" "About"
            , navLink "raylib.html" "Raylib"
            , navLink "build.html" "This site"
            , a [ class "site-nav__contact", href "mailto:robertflexxgh@gmail.com", onClick CloseMenu ] [ text "Say hello" ]
            ]
        ]


navLink : String -> String -> Html Msg
navLink destination label =
    a [ class "site-nav__link", href destination, onClick CloseMenu ] [ text label ]


viewBirthdayNotes : Html Msg
viewBirthdayNotes =
    div [ class "birthday-notes" ]
        [ birthdayNote "robert" "November 21" "It's my birthday." "Yes, I put my own birthday on my website. Let me have this." "#about" "Who's this idiot?"
        , birthdayNote "kokonico" "October 24" "Happy birthday, Kokonico." "A little corner of the internet for a good friend." "https://kokonico.me" "Visit Kokonico"
        , birthdayNote "moritisimor" "July 28" "Happy birthday, shawarma10." "Here's to another year of making things." "https://github.com/shawarma10/" "Visit shawarma10"
        ]


birthdayNote : String -> String -> String -> String -> String -> String -> Html Msg
birthdayNote person date greeting copy destination label =
    section [ class ("birthday-note birthday-note--" ++ person), attribute "aria-label" greeting ]
        [ viewBirthdayCake
        , div [ class "birthday-note__copy" ]
            [ p [ class "birthday-note__date" ] [ text date ]
            , h2 [] [ text greeting ]
            , p [] [ text copy ]
            ]
        , a [ href destination ] [ text label ]
        ]


viewBirthdayCake : Html Msg
viewBirthdayCake =
    div [ class "birthday-cake", attribute "aria-hidden" "true" ]
        [ span [ class "birthday-cake__candle" ] []
        , span [ class "birthday-cake__icing" ] []
        , span [ class "birthday-cake__base" ] []
        ]


viewHero : Html Msg
viewHero =
    section [ class "hero" ]
        [ div [ class "hero__copy" ]
            [ p [ class "hero__eyebrow" ] [ text "Systems programmer. Also makes games." ]
            , h1 [ class "hero__title", attribute "aria-label" "Robert Flexx" ]
                [ text "Robert"
                , span [] [ text "Flexx", span [ class "hero__period" ] [ text "." ] ]
                ]
            , p [ class "hero__lede" ]
                [ text "I'll write an operating system before I fix my sleep schedule."
                , span [] [ text "I'm Robert. I make terminal tools, compilers, and games. Sometimes I write another shell, because apparently the other ones weren't enough." ]
                ]
            , div [ class "hero__actions" ]
                [ a [ class "button button--primary", href "#work" ] [ text "Browse my work" ]
                , a [ class "text-link", href "https://github.com/RobertFlexx", target "_blank", rel "noreferrer" ] [ text "Find me on GitHub" ]
                ]
            ]
        , div [ class "hero__index" ]
            [ p [ class "hero__index-label" ] [ text "Pick your poison." ]
            , heroProject "fastfind" "Find your damn files." "Nim" "https://github.com/RobertFlexx/fastfind"
            , heroProject "ObeliskOS" "Writing an OS seemed like a good idea." "C / ASM" "https://github.com/RobertFlexx/ObeliskOS"
            , heroProject "rayscal" "raylib bindings for Scala Native." "Scala" "https://github.com/RobertFlexx/rayscal"
            ]
        , div [ class "hero__foot" ]
            [ p [] [ text "Writing code since 2018" ]
            , p [] [ text "Too many languages. Still learning." ]
            , a [ href "build.html" ] [ text "Built with Elm & SCSS" ]
            ]
        ]


heroProject : String -> String -> String -> String -> Html Msg
heroProject name copy language url =
    a [ class "hero-project", href url, target "_blank", rel "noreferrer" ]
        [ div [] [ h2 [] [ text name ], p [] [ text copy ] ]
        , span [] [ text language ]
        ]


viewProjects : Model -> Html Msg
viewProjects model =
    let
        selectedProjects =
            projectsFromGithub model.github

        visibleProjects =
            List.filter (\project -> model.activeFilter == All || project.kind == model.activeFilter) selectedProjects
    in
    section [ class "projects section-pad", id "work", attribute "aria-labelledby" "work-title" ]
        [ div [ class "section-heading" ]
            [ div []
                [ h2 [ id "work-title" ] [ text "Some things I've made." ]
                ]
            , p [ class "section-heading__aside" ] [ text "My GitHub pins, plus a few more worth showing. Some got wildly out of hand." ]
            ]
        , div [ class "project-filters", attribute "role" "group", attribute "aria-label" "Filter projects" ]
            [ filterButton model.activeFilter All (filterLabel "All" All selectedProjects)
            , filterButton model.activeFilter Systems (filterLabel "Systems" Systems selectedProjects)
            , filterButton model.activeFilter Tools (filterLabel "Tools" Tools selectedProjects)
            , filterButton model.activeFilter Games (filterLabel "Games" Games selectedProjects)
            ]
        , p [ class "sr-only", attribute "role" "status" ] [ text (String.fromInt (List.length visibleProjects) ++ " projects shown") ]
        , div [ class "project-list" ]
            (if List.isEmpty visibleProjects then
                [ p [ class "project-list__empty" ] [ text "No featured projects in this category right now. Try another filter, or see the games below." ] ]

             else
                List.map viewProject visibleProjects
            )
        ]


filterButton : Filter -> Filter -> String -> Html Msg
filterButton current value label =
    button
        [ classList [ ( "filter", True ), ( "filter--active", current == value ) ]
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
    label ++ " (" ++ String.fromInt count ++ ")"


viewProject : Project -> Html Msg
viewProject project =
    article [ class ("project " ++ project.tone) ]
        [ a [ class "project__link", href project.url, target "_blank", rel "noreferrer", attribute "aria-label" (project.name ++ " on GitHub") ]
            [ div [ class "project__main" ]
                [ h3 [ class "project__name" ] [ text project.name ]
                , p [ class "project__summary" ] [ text project.summary ]
                , code [ class "project__command" ] [ text project.command ]
                ]
            , p [ class "project__detail" ] [ text (cleanCopy project.detail) ]
            , div [ class "project__meta" ]
                [ span [ class "language-pill" ] [ text project.language ]
                , case project.stars of
                    Just stars ->
                        span [ class "star-pill", attribute "aria-label" (String.fromInt stars ++ " GitHub stars") ] [ text ("★ " ++ String.fromInt stars) ]

                    Nothing ->
                        text ""
                , span [ class "project__open" ] [ text "View code" ]
                ]
            ]
        ]


viewTraction : Maybe GithubData -> Html Msg
viewTraction github =
    let
        rankedRepos =
            github |> Maybe.map .topRepositories |> Maybe.withDefault []

        statValue accessor =
            github |> Maybe.map (accessor >> String.fromInt) |> Maybe.withDefault "…"
    in
    section [ class "traction section-pad", attribute "aria-labelledby" "github-title" ]
        [ div [ class "traction__intro" ]
            [ h2 [ id "github-title" ] [ text "The source is the fun part." ]
            , p [] [ text "Most of my work lives on GitHub. Open an issue, steal an idea, or tell me where I've fucked up. Preferably with a line number." ]
            , div [ class "traction__stats" ]
                [ githubStat (statValue .publicRepoCount) "Public repos"
                , githubStat (statValue .totalStars) "GitHub stars"
                , githubStat (statValue .primaryLanguageCount) "Languages used"
                ]
            ]
        , div [ class "traction__ranking" ]
            [ p [ class "traction__ranking-label" ] [ text "Most starred repositories" ]
            , div [] (List.map viewTractionRepo rankedRepos)
            , p [ class "traction__snapshot" ] [ text (githubSnapshotLabel github) ]
            ]
        ]


githubStat : String -> String -> Html Msg
githubStat value label =
    div [ class "github-stat" ] [ strong [] [ text value ], p [] [ text label ] ]


viewTractionRepo : GithubRepo -> Html Msg
viewTractionRepo repo =
    a [ class "traction-row", href repo.url, target "_blank", rel "noreferrer" ]
        [ div [ class "traction-row__repo" ] [ h3 [] [ text repo.name ], span [] [ text repo.language ] ]
        , span [ class "traction-row__stars" ] [ text ("★ " ++ String.fromInt repo.stars) ]
        ]


viewGameDev : Html Msg
viewGameDev =
    section [ class "game-dev section-pad", id "games", attribute "aria-labelledby" "games-title" ]
        [ div [ class "section-heading" ]
            [ div [] [ h2 [ id "games-title" ] [ text "I make games, too." ] ]
            , p [ class "section-heading__aside" ] [ text "Shaders, engine plumbing, Minecraft mods, and hours spent figuring out why a triangle is invisible." ]
            ]
        , div [ class "game-dev__stage" ]
            [ a [ class "game-feature", href "raylib.html#play" ]
                [ img [ class "game-feature__image", src "assets/little-ship.png", alt "little ship, my raylib landing game", width 1170, height 658, attribute "loading" "lazy" ] []
                , div [ class "game-feature__copy" ]
                    [ h3 [] [ text "little ship" ]
                    , p [] [ text "Land on the yellow pad. Gently. The ship is not insured." ]
                    , span [ class "button button--primary" ] [ text "Play little ship" ]
                    ]
                ]
            , div [ class "game-dev__projects" ] (List.map viewGameProject gameProjects)
            ]
        , p [ class "game-dev__afterthought" ]
            [ text "I like my game code hot, responsive, and not hauling sixteen gigabytes of emotional baggage." ]
        ]


viewGameProject : GameProject -> Html Msg
viewGameProject project =
    a [ class "game-project", href project.url, target "_blank", rel "noreferrer" ]
        [ span [ class "game-project__language" ] [ text project.language ]
        , h3 [] [ text project.name ]
        , p [] [ text project.copy ]
        ]


viewAbout : Html Msg
viewAbout =
    section [ class "about section-pad", id "about", attribute "aria-labelledby" "about-title" ]
        [ div [ class "about__lead" ]
            [ h2 [ id "about-title" ] [ text "It started with a robot." ]
            , div [ class "about__years" ] [ span [] [ text "2018" ], text "First lines of Ruby", span [] [ text "2021" ], text "Started building for the web" ]
            ]
        , div [ class "about__body" ]
            [ p [ class "about__statement" ] [ text "I learned Ruby in fourth grade to program robots. I've been making things with code ever since." ]
            , p [] [ text "These days I spend a lot of time on operating systems, shells, compilers, and graphics. I'll often try a different language just to see how it changes the way I solve a problem." ]
            , p [] [ text "I care about code I can read and software that responds when I press a button. Sometimes I build useful things. Sometimes I make fuck ass shit. Both count." ]
            , a [ class "text-link", href "https://github.com/RobertFlexx", target "_blank", rel "noreferrer" ] [ text "See what I'm working on" ]
            ]
        ]


viewRepoLab : Maybe GithubData -> Html Msg
viewRepoLab github =
    let
        browseLabel =
            github
                |> Maybe.map (\data -> "Browse all " ++ String.fromInt data.publicRepoCount ++ " repositories on GitHub")
                |> Maybe.withDefault "Browse all repositories on GitHub"
    in
    section [ class "repo-lab section-pad", id "lab", attribute "aria-labelledby" "lab-title" ]
        [ div [ class "section-heading" ]
            [ div [] [ h2 [ id "lab-title" ] [ text "The rest of the mess." ] ]
            , p [ class "section-heading__aside" ] [ text "Shells, editors, package managers, and several perfectly avoidable projects." ]
            ]
        , div [ class "repo-lab__grid" ] (List.map viewLabRepo labRepos)
        , a [ class "repo-lab__all", href "https://github.com/RobertFlexx?tab=repositories", target "_blank", rel "noreferrer" ]
            [ text browseLabel ]
        ]


viewLabRepo : LabRepo -> Html Msg
viewLabRepo repo =
    a [ class "lab-repo", href repo.url, target "_blank", rel "noreferrer" ]
        [ span [ class "lab-repo__language" ] [ text repo.language ]
        , h3 [] [ text repo.name ]
        , p [] [ text repo.copy ]
        ]


viewLanguages : Maybe GithubData -> Html Msg
viewLanguages github =
    let
        languageNote =
            github
                |> Maybe.map (\data -> String.fromInt data.primaryLanguageCount ++ " languages across my public repos. I may have a problem.")
                |> Maybe.withDefault "These are the regulars. I may have a problem."
    in
    section [ class "stack section-pad", id "stack", attribute "aria-labelledby" "stack-title" ]
        [ div [ class "section-heading" ]
            [ div [] [ h2 [ id "stack-title" ] [ text "Languages, plural." ] ]
            , p [ class "section-heading__aside" ] [ text languageNote ]
            ]
        , div [ class "language-grid" ] (List.map viewLanguage languages)
        ]


viewLanguage : Language -> Html Msg
viewLanguage language =
    div [ class ("language-card language--" ++ language.className) ]
        [ p [ class "language-card__name" ] [ text language.name ]
        , p [ class "language-card__note" ] [ text language.note ]
        ]


viewWebFriends : Html Msg
viewWebFriends =
    section [ class "web-friends section-pad", id "friends", attribute "aria-labelledby" "friends-title" ]
        [ div [ class "section-heading" ]
            [ div [] [ h2 [ id "friends-title" ] [ text "People I like." ] ]
            , p [ class "section-heading__aside" ] [ text "Go bother them. Tell them I sent you." ]
            ]
        , div [ class "web-friends__cards" ]
            [ friendCard "friend-reference--kokonico" "Kokonico" "Python, backend systems, databases, and web design." "kokonico.me" "https://kokonico.me" "Happy birthday, Kokonico!" "Please don't invoice me."
            , friendCard "friend-reference--moritisimor" "shawarma10" "Runtimes, virtual machines, and small tools. Based in Germany." "github.com/shawarma10" "https://github.com/shawarma10/" "Alles Gute zum Geburtstag, shawarma10!" "Ordnung muss sein."
            ]
        ]


friendCard : String -> String -> String -> String -> String -> String -> String -> Html Msg
friendCard variant name copy domain url greeting joke =
    let
        isGerman =
            variant == "friend-reference--moritisimor"
    in
    a [ class ("friend-reference " ++ variant), href url, target "_blank", rel "noreferrer" ]
        [ div [ class "friend-reference__main" ]
            [ p [ class "friend-reference__eyebrow" ]
                [ if isGerman then
                    span [ class "friend-reference__flag", attribute "aria-hidden" "true" ] []

                  else
                    text ""
                , text
                    (if isGerman then
                        "Deutschland"

                     else
                        "Idea borrowed with love."
                    )
                ]
            , div [ class "friend-reference__birthday" ]
                [ viewBirthdayCake
                , p [] [ text greeting ]
                ]
            , h3 [] [ text name ]
            , p [ class "friend-reference__description" ] [ text copy ]
            , span [ class "friend-reference__domain" ] [ text domain ]
            ]
        , div [ classList [ ( "friend-reference__reveal", True ), ( "friend-reference__reveal--germany", isGerman ) ] ]
            [ p [] [ text joke ]
            , if isGerman then
                p [] [ text "Even in the heap." ]

              else
                text ""
            , strong []
                [ text
                    (if isGerman then
                        "Sag Hallo."

                     else
                        "Go say hello."
                    )
                ]
            ]
        ]


viewContact : Html Msg
viewContact =
    section [ class "contact section-pad", id "contact", attribute "aria-labelledby" "contact-title" ]
        [ div []
            [ h2 [ id "contact-title" ] [ text "Got a hard problem?" ]
            , p [ class "contact__copy" ] [ text "Tell me what keeps you up at night. The software thing, ideally." ]
            ]
        , a [ class "contact__email", href "mailto:robertflexxgh@gmail.com" ] [ text "robertflexxgh@gmail.com" ]
        ]


viewFooter : Html Msg
viewFooter =
    footer [ class "footer" ]
        [ p [] [ text "© 2026 Robert Flexx" ]
        , p [] [ text "Made with Elm & SCSS" ]
        , div [ class "footer__links" ]
            [ a [ href "build.html" ] [ text "About this site" ]
            , a [ href "https://github.com/RobertFlexx/Portfolio", target "_blank", rel "noreferrer" ] [ text "Source code" ]
            , a [ href "#top" ] [ text "Back to top" ]
            ]
        ]


cleanCopy : String -> String
cleanCopy copy =
    copy |> String.replace "\u{2014}" ". " |> String.replace "\u{2013}" "-"


projects : List Project
projects =
    [ { index = "001"
      , name = "Plainwire"
      , command = "$ make build"
      , language = "ERLANG / ELM"
      , kind = Tools
      , summary = "Chat, calls, and a lot of Erlang."
      , detail = "A community chat app with an Erlang/OTP backend, Elm frontend, channels, DMs, voice calls, screen sharing, and WebRTC. Self-hosting supported."
      , url = "https://github.com/Plainwire-development/Plainwire"
      , tone = "project--coral"
      , stars = Nothing
      }
    , { index = "002"
      , name = "fastfind"
      , command = "$ ff \"what you meant\""
      , language = "NIM"
      , kind = Tools
      , summary = "Finds the file before find gets its pants on."
      , detail = "Fuzzy matching, content filters, natural-language queries, and interactive search in a single static binary."
      , url = "https://github.com/RobertFlexx/fastfind"
      , tone = "project--acid"
      , stars = Nothing
      }
    , { index = "003"
      , name = "ObeliskOS"
      , command = "$ boot /obelisk"
      , language = "C / ASM"
      , kind = Systems
      , summary = "An OS born from pain, nightmares, and C."
      , detail = "An independent UNIX-like operating system with a custom kernel, userland, and package ecosystem."
      , url = "https://github.com/RobertFlexx/ObeliskOS"
      , tone = "project--coral"
      , stars = Nothing
      }
    , { index = "004"
      , name = "rookcc"
      , command = "$ rcc source.c"
      , language = "PASCAL"
      , kind = Tools
      , summary = "A standalone C compiler toolchain."
      , detail = "A standalone C compiler with its own optimization toolchain and linker, built without invoking external tools."
      , url = "https://github.com/RobertFlexx/rookcc"
      , tone = "project--magenta"
      , stars = Nothing
      }
    , { index = "005"
      , name = "tankyard"
      , command = "$ cargo build --release --workspace"
      , language = "RUST / LUAU"
      , kind = Games
      , summary = "A native tank arena. Bring your own grudges."
      , detail = "A Rust game with online and offline play, a dedicated server, Luau mods, and an in-game map editor with logic gates, physics, and lighting."
      , url = "https://github.com/RobertFlexx/tankyard"
      , tone = "project--coral"
      , stars = Nothing
      }
    , { index = "006"
      , name = "gputop"
      , command = "$ python3 -m gputop"
      , language = "PYTHON"
      , kind = Tools
      , summary = "Find out why your GPU sounds pissed off."
      , detail = "An htop-style GPU monitor for load, memory, temperature, power, and per-process activity, with collectors for Apple Silicon, Linux, and Windows."
      , url = "https://github.com/RobertFlexx/gputop"
      , tone = "project--coral"
      , stars = Nothing
      }
    , { index = "007"
      , name = "MICA"
      , command = "$ mica-run --profile MICA-2C short.bin"
      , language = "C++ / SYSTEMVERILOG"
      , kind = Systems
      , summary = "Apparently software wasn't low-level enough."
      , detail = "An experimental 32/64-bit processor architecture with an assembler, linker, emulator, C++23 toolchain, and a SystemVerilog CPU. Includes RTL simulation and an FPGA board target."
      , url = "https://github.com/RobertFlexx/MICA"
      , tone = "project--coral"
      , stars = Nothing
      }
    , { index = "008"
      , name = "Free-Simula"
      , command = "$ fsim -std=fsim hello.sim -o hello"
      , language = "PASCAL"
      , kind = Tools
      , summary = "A school project that got slightly out of hand."
      , detail = "A native compiler for a modern Simula dialect, with its own x86-64 machine-code and ELF backend, managed memory, tasks, and native-library bindings."
      , url = "https://github.com/RobertFlexx/Free-Simula"
      , tone = "project--coral"
      , stars = Nothing
      }
    , { index = "009"
      , name = "hilbert"
      , command = "$ make test"
      , language = "MODULA-2 / C"
      , kind = Tools
      , summary = "A systems language in the Wirth tradition."
      , detail = "A native x86-64 Linux compiler with modules, generics, tracing garbage collection, tasks, and C interoperability. Written in GNU Modula-2, with a C runtime."
      , url = "https://github.com/RobertFlexx/hilbert"
      , tone = "project--coral"
      , stars = Nothing
      }
    , { index = "010"
      , name = "SPS"
      , command = "$ sget upgrade --plan"
      , language = "SH / AWK"
      , kind = Systems
      , summary = "Dependency hell, now with my own tools."
      , detail = "A POSIX shell and AWK package system with recipe-based builds, dependency handling, and upgrades. Used by SPS Linux, also called Splux."
      , url = "https://github.com/RobertFlexx/SPS"
      , tone = "project--coral"
      , stars = Nothing
      }
    , { index = "011"
      , name = "blockbox"
      , command = "$ blockbox --play"
      , language = "SCALA"
      , kind = Games
      , summary = "An open-source voxel game in Scala."
      , detail = "A playable Scala 3/LWJGL voxel sandbox with procedural terrain, survival systems, world saves, shader packs, and scripting."
      , url = "https://github.com/RobertFlexx/blockbox"
      , tone = "project--magenta"
      , stars = Nothing
      }
    , { index = "012"
      , name = "rayscal"
      , command = "$ scala-native run"
      , language = "SCALA"
      , kind = Games
      , summary = "raylib bindings for Scala Native."
      , detail = "Experimental bindings that bring raylib 6.0 graphics, audio, and input to Scala Native."
      , url = "https://github.com/RobertFlexx/rayscal"
      , tone = "project--yellow"
      , stars = Nothing
      }
    ]


pinnedProjectTemplates : List Project
pinnedProjectTemplates =
    [ { index = "001"
      , name = "RSH"
      , command = "$ srsh"
      , language = "RUBY"
      , kind = Systems
      , summary = "An interactive shell in Ruby."
      , detail = "A Ruby shell with built-ins, autosuggestions, history, aliases, and scripting support."
      , url = "https://github.com/RobertFlexx/RSH"
      , tone = "project--red"
      , stars = Nothing
      }
    , { index = "002"
      , name = "raid"
      , command = "$ raid / -time"
      , language = "ZIG"
      , kind = Tools
      , summary = "Recursive file traversal in Zig."
      , detail = "Low-level filesystem traversal with predictable behavior and support for hidden files."
      , url = "https://github.com/RobertFlexx/raid"
      , tone = "project--blue"
      , stars = Nothing
      }
    , { index = "003"
      , name = "tedit"
      , command = "$ tedit notes.txt"
      , language = "C++"
      , kind = Tools
      , summary = "Opens your files, not a situationship."
      , detail = "A general-purpose command-line text editor with a familiar workflow, written in C++."
      , url = "https://github.com/RobertFlexx/tedit"
      , tone = "project--violet"
      , stars = Nothing
      }
    , { index = "004"
      , name = "UnixImage"
      , command = "$ uniximage disk.iso"
      , language = "C / GTK"
      , kind = Tools
      , summary = "A disk-image writer for UNIX systems."
      , detail = "Graphical and command-line interfaces for writing disk images, including compressed archives, on UNIX-like systems."
      , url = "https://github.com/RobertFlexx/UnixImage"
      , tone = "project--green"
      , stars = Nothing
      }
    , { index = "005"
      , name = "Volt"
      , command = "$ volt get /api"
      , language = "ODIN"
      , kind = Tools
      , summary = "Gets, posts, and leaves."
      , detail = "A command-line HTTP client for making requests and inspecting responses, written in Odin."
      , url = "https://github.com/RobertFlexx/Volt"
      , tone = "project--orange"
      , stars = Nothing
      }
    , { index = "006"
      , name = "pawnasm"
      , command = "$ pawnasm input.asm"
      , language = "COMPONENT PASCAL"
      , kind = Tools
      , summary = "An Intel-syntax assembler."
      , detail = "A lean standalone Intel-syntax assembler supporting common NASM conventions and designed as an educational codebase."
      , url = "https://github.com/RobertFlexx/pawnasm"
      , tone = "project--red"
      , stars = Nothing
      }
    , { index = "007"
      , name = "knightlinker"
      , command = "$ kld main.o"
      , language = "ADA"
      , kind = Tools
      , summary = "An Ada linker for the RookCC toolchain."
      , detail = "A standalone Ada 2022 linker for the RookCC toolchain, resolving ELF64 objects and emitting multiple executable and record formats."
      , url = "https://github.com/RobertFlexx/knightlinker"
      , tone = "project--blue"
      , stars = Nothing
      }
    ]


gameProjects : List GameProject
gameProjects =
    [ { index = "G.00"
      , name = "Tank Yard"
      , language = "RUST / LUAU"
      , copy = "A native tank arena with multiplayer, scripted mods, and a map editor that got wildly out of hand."
      , url = "https://github.com/RobertFlexx/tankyard"
      }
    , { index = "G.01"
      , name = "rayscal"
      , language = "SCALA / RAYLIB"
      , copy = "Graphics, audio, and input from raylib 6.0, available in Scala Native."
      , url = "https://github.com/RobertFlexx/rayscal"
      }
    , { index = "G.02"
      , name = "blockbox"
      , language = "SCALA"
      , copy = "A free and open-source block voxel game written in Scala."
      , url = "https://github.com/RobertFlexx/blockbox"
      }
    , { index = "G.03"
      , name = "PlayboxLib"
      , language = "C"
      , copy = "A 2D game-engine library for building games in the terminal."
      , url = "https://github.com/RobertFlexx/PlayboxLib"
      }
    , { index = "G.04"
      , name = "GLSL Hallway"
      , language = "GLSL"
      , copy = "A ray-traced hallway that doubles as a GPU benchmark. The hallway is hot; your GPU will be too."
      , url = "https://github.com/RobertFlexx/GLSL-Hallway-GPU-Benchmark"
      }
    , { index = "G.05"
      , name = "Minecraft mods"
      , language = "JAVA"
      , copy = "Java mods for changing minecart speed and unlocking game values."
      , url = "https://github.com/RobertFlexx/unlimited-minecart-speed"
      }
    ]


labRepos : List LabRepo
labRepos =
    [ { name = "FerriteOS"
      , language = "C++"
      , copy = "A simulated UNIX-like operating system in one process, with a filesystem, services, users, and packages."
      , url = "https://github.com/RobertFlexx/FerriteOS"
      }
    , { name = "DropNest"
      , language = "GLEAM"
      , copy = "Share files, links, notes, and clipboard text over a local network."
      , url = "https://github.com/RobertFlexx/DropNest"
      }
    , { name = "Photon"
      , language = "RUBY"
      , copy = "A Portage-inspired package manager in Ruby. Dependency graphs are apparently my idea of a good time."
      , url = "https://github.com/RobertFlexx/Photon"
      }
    , { name = "pre-but-better"
      , language = "RUST"
      , copy = "Preview images, GIFs, and video directly in the terminal."
      , url = "https://github.com/RobertFlexx/pre-but-better"
      }
    , { name = "mote"
      , language = "ASSEMBLY"
      , copy = "A tiny CLI editor in GNU Assembly. C was feeling a bit too comfortable."
      , url = "https://github.com/RobertFlexx/mote"
      }
    , { name = "DTOP"
      , language = "D"
      , copy = "A UNIX process manager with a text-based interface."
      , url = "https://github.com/RobertFlexx/DTOP"
      }
    , { name = "JvmShell"
      , language = "SCALA"
      , copy = "An interactive Linux shell built around Java, Kotlin, and Scala."
      , url = "https://github.com/RobertFlexx/JvmShell"
      }
    , { name = "hrm"
      , language = "PASCAL"
      , copy = "An experimental replacement for rm, written in Pascal."
      , url = "https://github.com/RobertFlexx/hrm"
      }
    , { name = "system-lens"
      , language = "VALA"
      , copy = "A GTK system monitor for viewing resource usage and process activity."
      , url = "https://github.com/RobertFlexx/system-lens"
      }
    , { name = "Nacre"
      , language = "PERL"
      , copy = "A system shell in Perl. Yes, another one."
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
    case github |> Maybe.map .featured |> Maybe.andThen nonEmptyList of
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
    case findProject repo.url of
        Just template ->
            { template
                | index = projectIndex
                , name = repo.name
                , language = template.language
                , detail = template.detail
                , url = repo.url
                , stars = Just repo.stars
            }

        Nothing ->
            { index = projectIndex
            , name = repo.name
            , command = "$ open /" ++ String.toLower repo.name
            , language = String.toUpper repo.language
            , kind = Tools
            , summary = "From my current GitHub pins."
            , detail = liveDescription "Open the repository for source code, documentation, and project updates."
            , url = repo.url
            , tone = toneForIndex index
            , stars = Just repo.stars
            }


findProject : String -> Maybe Project
findProject repoUrl =
    (projects ++ pinnedProjectTemplates)
        |> List.filter (\project -> String.toLower project.url == String.toLower repoUrl)
        |> List.head


repoDetail : GithubRepo -> String
repoDetail repo =
    case findProject repo.url of
        Just project ->
            project.detail

        Nothing ->
            if String.isEmpty (String.trim repo.description) then
                "Open the repository for source code, documentation, and project updates."

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
            if String.isEmpty data.status then
                "Saved GitHub snapshot from " ++ String.left 10 data.generatedAt ++ "."

            else
                data.status

        Nothing ->
            "Star counts appear when GitHub data is available."


nonEmptyList : List a -> Maybe (List a)
nonEmptyList values =
    if List.isEmpty values then
        Nothing

    else
        Just values


githubDataDecoder : Decoder GithubData
githubDataDecoder =
    Decode.map8 GithubData
        (Decode.field "generatedAt" Decode.string)
        (Decode.field "publicRepoCount" Decode.int)
        (Decode.field "totalStars" Decode.int)
        (Decode.field "primaryLanguageCount" Decode.int)
        (Decode.field "pinned" (Decode.list githubRepoDecoder))
        (Decode.field "topRepositories" (Decode.list githubRepoDecoder))
        (Decode.oneOf [ Decode.field "featured" (Decode.list githubRepoDecoder), Decode.field "pinned" (Decode.list githubRepoDecoder) ])
        (Decode.oneOf [ Decode.field "status" Decode.string, Decode.succeed "" ])


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
