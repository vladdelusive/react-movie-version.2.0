import {API} from "services/api";

export const types = {
    UPLOAD: "UPLOAD",
    OFFLOAD_DATA: "OFFLOAD_DATA",
    TOGGLE_SUGGESTIONS: "TOGGLE",
    SET_INPUT: "SET_INPUT",
    CLEAR_ALL: "CLEAR_ALL",
    MOVIES_PAGE: "MOVIES_PAGE",
    ACTORS_PAGE: "ACTORS_PAGE",
    RELOAD_PAGE: "RELOAD_PAGE",
    INPUT_IS_ACTIVE: "INPUT_IS_ACTIVE",
    BURGER_TOGGLE: "BURGER_TOGGLE",

    SEARCH_ACTORS: "SEARCH_ACTORS",
    SEARCH_MOVIES: "SEARCH_MOVIES",
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


