import {API} from "services/api";
import {guards} from 'services/api/guards'

export const types = {
    LOAD_ACTORS: "@top-actors/LOAD_ACTORS"
}

export const actions = {
    fetchActors: () => async (dispatch, getState) => { 
        const {page} = getState().actors 
        const results = await API.TRENDY_ACTORS({page});
        return dispatch(actions.saveActors(guards.movActData(results)))
    },
    saveActors: (payload) => ({type: types.LOAD_ACTORS, payload})
}


