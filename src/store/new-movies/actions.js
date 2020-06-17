import {API} from "services/api";

export const types = {
    LOAD_MOVIES: "@new-movies/LOAD_MOVIES"
}

export const actions = {
    fetchMovies: () => async (dispatch, getState) => {
        const {page} = getState().movies
        const fetched = await API.NEWLY_MOVIES({page});
        const {results} = fetched.data;
        return dispatch({type: types.LOAD_MOVIES, payload: results})
    },
}


