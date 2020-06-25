import {API} from "services/api";
import {guards} from 'services/api/guards'
import {ILoadActors} from "./types";

export const types = {
    LOAD_ACTORS: "@top-actors/LOAD_ACTORS"
}

export const actions = {
    fetchActors: () => async (dispatch: any, getState: any) => {
        const {page} = getState().actors 
        const results = await API.TRENDY_ACTORS({page});
        dispatch(actions.saveActors(guards.movActData(results)))
    },
    saveActors: (payload: any): ILoadActors => ({type: types.LOAD_ACTORS, payload})
}


