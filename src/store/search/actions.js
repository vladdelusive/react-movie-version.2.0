import axios from "services/http/index";
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
    ACReloadPage: () => ({type: types.RELOAD_PAGE}),
    ACClearInput: () => ({type: types.CLEAR_ALL}),
    ACBurgerToggle: () => ({type: types.BURGER_TOGGLE}),
    ACOffloadData: () => ({type: types.OFFLOAD_DATA}),
    ACToggleSuggestions: (payload) => ({type: types.TOGGLE_SUGGESTIONS, payload }),
    ACChangeMoviePage: (payload) => ({type: types.MOVIES_PAGE, payload}),
    ACChangeActorPage: (payload) => ({type: types.ACTORS_PAGE, payload }),
    ACSetInput: (payload) => ({type: types.SET_INPUT, payload}),
    ACInputIsActive: (payload) => ({type: types.INPUT_IS_ACTIVE, payload}),
    ACFetchInputValue: value => async (dispatch) => {
        const fetches = [axios(API.SEARCH_MOVIE_PARAM_URL(value)), axios(API.SEARCH_ACTOR_PARAM_URL(value))];
        const [MOVIES, ACTORS] = await Promise.all(fetches).then((res) =>
            Promise.all(res.map((r) => r.data))
        );
        return dispatch({type: types.UPLOAD, actors: ACTORS.results, movies: MOVIES.results})
    }
}


