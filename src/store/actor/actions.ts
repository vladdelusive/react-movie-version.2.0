import {API} from "services/api";
import {guards} from 'services/api/guards'
import {ThunkAction} from "redux-thunk";
import {ICastMovies, IDetailsActors, IPersonInfo, IStore} from "../../react-app-env";

export const types = {
    SET_DATA: "@actor/SET_DATA",
    TOGGLE_LOADING: "@actor/TOGGLE_LOADING"
}

export interface IAction<T = Record<any, any>> {
    type: string,
    id: number,
    movies: ICastMovies[],
    person: (IDetailsActors & IPersonInfo)
}

interface IActorIdData {
    id: number,
    movies: ICastMovies[],
    person: (IDetailsActors & IPersonInfo)
}


export const actions = {
    fetchData: (personId: number): ThunkAction<Promise<void>, IStore, unknown, IAction> => async (dispatch) => {
        const fetches = [
            API.ACTOR_DETAILS({personId}),
            API.ACTOR_MOVIES({personId}),
        ];
        const [actorDetails, actorMovies] = await Promise.all(fetches).then(([details, movies])=>[guards.detailsAct(details), guards.actorMovies(movies)]);
        dispatch(actions.setActorIdData({person: actorDetails, movies: actorMovies, id: personId}))
    },
    setActorIdData: ({person, movies, id}: IActorIdData) => ({type: types.SET_DATA, person, movies, id}),
}


