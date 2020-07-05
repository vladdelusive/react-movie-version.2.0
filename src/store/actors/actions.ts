import {API} from "services/api";
import {guards} from 'services/api/guards'
import {IActorsResult, IActionTopActors, IAction, IActorIdData } from "./types";
import {ThunkAction} from "redux-thunk";
import {IStore} from "react-app-env";

export const types = {
    GET_TOP_ACTORS: "@actors/top_actors/GET_TOP_ACTORS",
    LOAD_TOP_ACTORS: "@actors/top_actors/LOAD_TOP_ACTORS",
    SET_ACTOR_INFO: "@actors/actors_info/SET_DATA",
}

export const actions = { 
    getActors: ()=> ({type: types.GET_TOP_ACTORS}),
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
