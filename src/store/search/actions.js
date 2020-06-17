import {API} from "services/api";

export const types = {
    UPLOAD: "@search/UPLOAD",
    OFFLOAD_DATA: "@search/OFFLOAD_DATA",
    TOGGLE_SUGGESTIONS: "@search/TOGGLE_SUGGESTIONS",
    SET_INPUT: "@search/SET_INPUT",
    CLEAR_ALL: "@search/CLEAR_ALL",
    MOVIES_PAGE: "@search/MOVIES_PAGE",
    ACTORS_PAGE: "@search/ACTORS_PAGE",
    RELOAD_PAGE: "@search/RELOAD_PAGE",
    INPUT_IS_ACTIVE: "@search/INPUT_IS_ACTIVE",
    BURGER_TOGGLE: "@search/BURGER_TOGGLE",
    SEARCH_ACTORS: "@search/SEARCH_ACTORS",
    SEARCH_MOVIES: "@search/SEARCH_MOVIES",
}

export const actions = {
    reloadPage: () => ({type: types.RELOAD_PAGE}),
    clearInput: () => ({type: types.CLEAR_ALL}),
    burgerToggle: () => ({type: types.BURGER_TOGGLE}),
    offloadData: () => ({type: types.OFFLOAD_DATA}),
    toggleSuggestions: (payload) => ({type: types.TOGGLE_SUGGESTIONS, payload }),
    changeMoviePage: (payload) => ({type: types.MOVIES_PAGE, payload}),
    changeActorPage: (payload) => ({type: types.ACTORS_PAGE, payload }),
    setInput: (payload) => ({type: types.SET_INPUT, payload}),
    inputIsActive: (payload) => ({type: types.INPUT_IS_ACTIVE, payload}),
    fetchInputValue: query => async (dispatch) => {
        const fetches = [API.SEARCH_MOVIE({query}), API.SEARCH_ACTOR({query})];
        const [MOVIES, ACTORS] = await Promise.all(fetches).then((res) =>
            Promise.all(res.map((r) => r.data))
        );
        return dispatch({type: types.UPLOAD, actors: ACTORS.results, movies: MOVIES.results})
    },
    fetchSearchActors: (query, page) => async (dispatch) => {
        const fetched = await API.SEARCH_ACTOR({query, page})
        const actors = fetched.data;
        return dispatch({type: types.SEARCH_ACTORS, actors})
    },
    fetchSearchMovies: (query, page) => async (dispatch) => {
        const fetched = await API.SEARCH_MOVIE({query, page})
        const movies = fetched.data;
        return dispatch({type: types.SEARCH_MOVIES, movies})
    },
}


