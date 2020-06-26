import {API} from "services/api";
import {guards} from 'services/api/guards'
import {IActorsResult} from "./types";
import {ThunkAction} from "redux-thunk";
import { IStore } from "../../react-app-env";

export const types = {
    LOAD_ACTORS: "@top-actors/LOAD_ACTORS"
}

export interface IAction<T = Record<any, any>> {
    type: string,
    payload: T
}

export const actions = { 
    fetchActors: (): ThunkAction<Promise<void>, IStore, unknown, IAction<IActorsResult[]>> => async (dispatch, getState) => {
        const {page} = getState().actors
        const results = await API.TRENDY_ACTORS({page});
        dispatch(actions.saveActors(guards.actData(results)))
    },
    saveActors: (payload: IActorsResult[]): IAction<IActorsResult[]> => ({type: types.LOAD_ACTORS, payload})
}


