import {API} from "services/api";
import {guards} from 'services/api/guards'
import {ThunkAction} from "redux-thunk";
import {IMovies, IStore} from "../../react-app-env";

export const types = {
    LOAD_MOVIES: "@new-movies/LOAD_MOVIES" 
}

export interface IAction<T = Record<any, any>> {
    type: string,
    payload: T
}

export const actions = {
    fetchMovies: (): ThunkAction<Promise<void>, IStore, unknown, IAction<IMovies[]>> => async (dispatch, getState) => {
        const {page} = getState().movies
        const results = await API.NEWLY_MOVIES({page});
        dispatch(actions.saveMovies(guards.movData(results)))
    },
    saveMovies: (payload: IMovies[]): IAction<IMovies[]> => ({type: types.LOAD_MOVIES, payload})
}


