import {API} from "services/api";
import {guards} from 'services/api/guards'
import {IActorsResult, IActionTopActors, IAction, IActorIdData } from "./types";
import {ThunkAction} from "redux-thunk";
import {IStore} from "react-app-env";

export const types = {
    LOAD_TOP_ACTORS: "@actors/top_actors/LOAD_TOP_ACTORS",
    SET_ACTOR_INFO: "@actors/actors_info/SET_DATA",
}

export const actions = { 
    fetchActors: (): ThunkAction<Promise<void>, IStore, unknown, IActionTopActors<IActorsResult[]>> => async (dispatch, getState) => {
        const {page} = getState().actors.topActors
        try {
            const results = await API.TRENDY_ACTORS({page});
            dispatch(actions.saveActors(guards.actData(results)))
        } catch(e) {
            console.error(e)
        }
    },
    saveActors: (payload: IActorsResult[]): IActionTopActors<IActorsResult[]> => ({type: types.LOAD_TOP_ACTORS, payload}),

    fetchData: (personId: number): ThunkAction<Promise<void>, IStore, unknown, IAction> => async (dispatch) => {
        try {
            const fetches = [
                API.ACTOR_DETAILS({personId}),
                API.ACTOR_MOVIES({personId}),
            ];
            const [actorDetails, actorMovies] = await Promise.all(fetches).then(([details, movies])=>[guards.detailsAct(details), guards.actorMovies(movies)]);
            dispatch(actions.setActorIdData({person: actorDetails, movies: actorMovies, id: personId}))
        } catch(e) {
            console.error(e)
        }
    },
    setActorIdData: ({person, movies, id}: IActorIdData) => ({type: types.SET_ACTOR_INFO, person, movies, id}),
}
