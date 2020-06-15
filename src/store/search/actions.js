import {http} from "services/http";
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
    fetchInputValue: value => async (dispatch) => {
        const fetches = [http.get(API.SEARCH_MOVIE_PARAM_URL(value)), http.get(API.SEARCH_ACTOR_PARAM_URL(value))];
        const [MOVIES, ACTORS] = await Promise.all(fetches).then((res) =>
            Promise.all(res.map((r) => r.data))
        );
        return dispatch({type: types.UPLOAD, actors: ACTORS.results, movies: MOVIES.results})
    },
}


