import {API} from "services/api";

export const types = {
    SET_DATA: "@actor/SET_DATA",
    CLEAR_DATA: "@actor/CLEAR_DATA",
}

export const actions = {
    fetchData: personId => async (dispatch) => {
        const fetches = [
            API.ACTOR_DETAILS({personId}),
            API.ACTOR_MOVIES({personId}),
        ];
        const [actorDetails, actorMovies] = await Promise.all(fetches).then((res) =>
            Promise.all(res.map((r) => r.data))
        );
        return dispatch(actions.setActorIdData({person: actorDetails, movies: actorMovies.cast}))
    },
    setActorIdData: ({person, movies}) => ({type: types.SET_DATA, person, movies}),
    clearData: () => ({type: types.CLEAR_DATA}),
}


