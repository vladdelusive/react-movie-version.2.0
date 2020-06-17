import {API} from "services/api";

export const types = {
    HIDE_MOVIES: "@movie/HIDE_MOVIES",
    FETCH_DATA: "@movie/FETCH_DATA",
    CLEAR_DATA: "@movie/CLEAR_DATA",
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
        return dispatch({type: types.FETCH_DATA, person: actorDetails, movies: actorMovies.cast})
    },

    moviesInfoTrigger: () => ({type: types.HIDE_MOVIES}),
    clearData: () => ({type: types.CLEAR_DATA}),
}


