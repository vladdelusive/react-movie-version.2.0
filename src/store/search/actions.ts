import {API} from "services/api";
import {guards} from 'services/api/guards'
import {
    IActionSearch,
    IActionSetPayloadActorsAndMovies,
    IActionSetPayloadActors,
    IActionSetPayloadMovies,
    IActionPayloadActorsSearch,
    IActionPayloadMoviesSearch,
    IActors
} from "./types";
import {ThunkAction} from "redux-thunk";
import {ICastMovies} from "react-app-env";

export const types = {
    UPLOAD_ACTORS_MOVIES: "@search/UPLOAD_ACTORS_MOVIES",
    OFFLOAD_DATA: "@search/OFFLOAD_DATA",
    TOGGLE_SUGGESTIONS: "@search/TOGGLE_SUGGESTIONS",
    SET_INPUT: "@search/SET_INPUT",
    CLEAR_ALL: "@search/CLEAR_ALL",
    MOVIES_PAGE: "@search/MOVIES_PAGE",
    ACTORS_PAGE: "@search/ACTORS_PAGE",
    RELOAD_PAGE: "@search/RELOAD_PAGE",
    INPUT_IS_ACTIVE: "@search/INPUT_IS_ACTIVE",
    BURGER_TOGGLE: "@search/BURGER_TOGGLE",
    SET_SEARCH_ACTORS: "@search/SEARCH_ACTORS",
    SET_SEARCH_MOVIES: "@search/SEARCH_MOVIES",
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
    setActors: ({actors}: IActionPayloadActorsSearch) => ({type: types.SET_SEARCH_ACTORS, actors}),
    setMovies: ({movies}: IActionPayloadMoviesSearch) => ({type: types.SET_SEARCH_MOVIES, movies}),

    fetchInputValue: (query: string): ThunkAction<Promise<void>, unknown, unknown, IActionSetPayloadActorsAndMovies> => async (dispatch) => {
        try {
            const fetches = [API.SEARCH_MOVIE({query}), API.SEARCH_ACTOR({query})];
            const [movies, actors] = await Promise.all(fetches).then(([mov, act]) => [guards.movieResults(mov), guards.movieResults(act)]);
            dispatch(actions.setActorsAndMovies({actors, movies}))
        } catch(e) {
            console.error(e)
        }
    },

    fetchSearchActors: (query: string, page: number): ThunkAction<Promise<void>, unknown, unknown, IActionSetPayloadActors> => async (dispatch) => {
        try {
            const fetched = await API.SEARCH_ACTOR({query, page})
            dispatch(actions.setActors({actors: guards.searchData<IActors>(fetched)}))
        } catch(e) {
            console.error(e)
        }
    },

    fetchSearchMovies: (query: string, page: number): ThunkAction<Promise<void>, unknown, unknown, IActionSetPayloadMovies>  => async (dispatch) => {
        try {
            const fetched = await API.SEARCH_MOVIE({query, page})
            dispatch(actions.setMovies({movies: guards.searchData<ICastMovies>(fetched)}))
        } catch(e) {
            console.error(e)
        }
    }
}


