import {API} from "services/api";

export const types = {
    LOAD_ACTORS: "@top-actors/LOAD_ACTORS"
}

export const actions = {
    fetchActors: () => async (dispatch, getState) => {
        const {page} = getState().actors
        const fetched = await API.TRENDY_ACTORS({page});
        const {results} = fetched.data;
        return dispatch(actions.saveActors(results))
    },
    saveActors: (payload) => ({type: types.LOAD_ACTORS, payload})
}


