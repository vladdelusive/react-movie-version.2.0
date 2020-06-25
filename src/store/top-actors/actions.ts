import {API} from "services/api";
import {guards} from 'services/api/guards'
import {ILoadActors, ITopActors} from "./types";
import {Action} from "redux";
import {ThunkAction} from "redux-thunk";

export const types = {
    LOAD_ACTORS: "@top-actors/LOAD_ACTORS"
}

export const actions = {
    fetchActors: (): ThunkAction<void, ITopActors, {}, Action<[]>> => async (dispatch:any, getState: any) => {
        const {page} = getState().actors 
        const results = await API.TRENDY_ACTORS({page});
        dispatch(actions.saveActors(guards.movActData(results)))
    },
    saveActors: (payload: any): ILoadActors => ({type: types.LOAD_ACTORS, payload})
}


