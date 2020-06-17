import {API} from "services/api";
import {DEFAULT_TRAILER} from "constants/constants";

export const types = {
    SET_DATA: "@movie/SET_DATA",
    SET_BADGES: "@movie/SET_BADGES",
    TOGGLE_LOADING: "@movie/TOGGLE_LOADING",
}

export const actions = {
    fetchData: movieId => async (dispatch) => {
        const fetches = [API.MOVIE_DETAILS({movieId}),
            API.YOUTUBE_URL({movieId}), API.MOVIE_CAST({movieId})];
        const [results, TRA, CAST] = await Promise.all(fetches).then((res) =>
            Promise.all(res.map((r) => r.data))
        );
        const trailer = TRA.results[0] ? TRA.results[0].key : DEFAULT_TRAILER;
        return dispatch(actions.setMovieIdData({results, trailer, cast: CAST.cast, id: movieId}))
    },
    setMovieIdData: ({results, trailer, cast, id}) => ({type: types.SET_DATA, results, trailer, cast, id}),
    setBadges: (payload, id) => ({type: types.SET_BADGES, payload, id}),
    changeLoading: (payload) => ({type: types.TOGGLE_LOADING, payload}),
}


