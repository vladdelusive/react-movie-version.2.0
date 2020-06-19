import {API} from "services/api";
import {guards} from 'services/api/guards'
export const types = {
    LOAD_MOVIES: "@new-movies/LOAD_MOVIES" 
}

export const actions = {
    fetchMovies: () => async (dispatch, getState) => {
        const {page} = getState().movies 
        const results = await API.NEWLY_MOVIES({page});
        return dispatch(actions.saveMovies(guards.movActData(results)))
    },
    saveMovies: (payload) => ({type: types.LOAD_MOVIES, payload})
}


