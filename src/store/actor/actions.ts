import {API} from "services/api";
import {guards} from 'services/api/guards'
export const types = {
    SET_DATA: "@actor/SET_DATA",
    TOGGLE_LOADING: "@actor/TOGGLE_LOADING"
}

export const actions = {
    fetchData: (personId: number) => async (dispatch: any) => {
        const fetches = [
            API.ACTOR_DETAILS({personId}),
            API.ACTOR_MOVIES({personId}),
        ];
        const [actorDetails, actorMovies] = await Promise.all(fetches).then(([details, movies])=>[guards.detailsAct(details), guards.actorMovies(movies)]);
        return dispatch(actions.setActorIdData({person: actorDetails, movies: actorMovies, id: personId}))
    },
    setActorIdData: ({person, movies, id}: any) => ({type: types.SET_DATA, person, movies, id}),
}


