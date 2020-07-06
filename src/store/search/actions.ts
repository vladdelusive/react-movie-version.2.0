import {
    IActionSearch,
    IActionPayloadActorsSearch,
    IActionPayloadMoviesSearch,
    IActors
} from "./types";
import {ICastMovies} from "react-app-env";

export const types = {
    UPLOAD_ACTORS_MOVIES: "@search/UPLOAD_ACTORS_MOVIES",
    GET_ACTORS_MOVIES: "@search/GET_ACTORS_MOVIES",

    SET_SEARCH_ACTORS: "@search/SET_SEARCH_ACTORS",
    GET_SEARCH_ACTORS: "@search/GET_SEARCH_ACTORS",

    SET_SEARCH_MOVIES: "@search/SET_SEARCH_MOVIES",
    GET_SEARCH_MOVIES: "@search/GET_SEARCH_MOVIES",

    OFFLOAD_DATA: "@search/OFFLOAD_DATA",
    TOGGLE_SUGGESTIONS: "@search/TOGGLE_SUGGESTIONS",
    SET_INPUT: "@search/SET_INPUT",
    CLEAR_ALL: "@search/CLEAR_ALL",
    MOVIES_PAGE: "@search/MOVIES_PAGE",
    ACTORS_PAGE: "@search/ACTORS_PAGE",
    RELOAD_PAGE: "@search/RELOAD_PAGE",
    INPUT_IS_ACTIVE: "@search/INPUT_IS_ACTIVE",
    BURGER_TOGGLE: "@search/BURGER_TOGGLE",
}

export const actions = {
    reloadPage: () => ({type: types.RELOAD_PAGE}),
    clearInput: () => ({type: types.CLEAR_ALL}),
    burgerToggle: () => ({type: types.BURGER_TOGGLE}),
    offloadData: () => ({type: types.OFFLOAD_DATA}),
    toggleSuggestions: (payload: IActionSearch) => ({type: types.TOGGLE_SUGGESTIONS, payload }),
    changeMoviePage: (payload: IActionSearch) => ({type: types.MOVIES_PAGE, payload}),
    changeActorPage: (payload: IActionSearch) => ({type: types.ACTORS_PAGE, payload }),
    setInput: (payload: IActionSearch) => ({type: types.SET_INPUT, payload}),
    inputIsActive: (payload: IActionSearch) => ({type: types.INPUT_IS_ACTIVE, payload}),

    setActorsAndMovies: ({actors, movies}: { actors: IActors[], movies: ICastMovies[] })  => ({type: types.UPLOAD_ACTORS_MOVIES, actors, movies}),
    getActorsAndMovies: (query: string) => ({type: types.GET_ACTORS_MOVIES, query}),

    getSearchActors: (query: string, page: number) => ({type: types.GET_SEARCH_ACTORS, query, page}),
    setSearchActors: ({actors}: IActionPayloadActorsSearch) => ({type: types.SET_SEARCH_ACTORS, actors}),

    getSearchMovies: (query: string, page: number) => ({type: types.GET_SEARCH_MOVIES, query, page}),
    setMovies: ({movies}: IActionPayloadMoviesSearch) => ({type: types.SET_SEARCH_MOVIES, movies}),
}


