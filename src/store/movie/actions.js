import {API} from "services/api";
import {DEFAULT_TRAILER} from "constants/constants";

export const types = {
    FETCH_DATA: "@movie/FETCH_DATA",
    CLEAR_DATA: "@movie/CLEAR_DATA",
    SET_BADGES: "@movie/SET_BADGES",
}

export const actions = {
    fetchData: movieId => async (dispatch) => {
        const fetches = [API.MOVIE_DETAILS({movieId}),
            API.YOUTUBE_URL({movieId}), API.MOVIE_CAST({movieId})];
        const [results, TRA, CAST] = await Promise.all(fetches).then((res) =>
            Promise.all(res.map((r) => r.data))
        );
        const trailer = TRA.results[0] ? TRA.results[0].key : DEFAULT_TRAILER;
        return dispatch(actions.setMovieIdData({results, trailer, cast: CAST.cast}))
    },
    setMovieIdData: ({results, trailer, cast}) => ({type: types.FETCH_DATA, results, trailer, cast}),
    setBadges: (payload) => ({type: types.SET_BADGES, payload}),
    clearData: () => ({type: types.CLEAR_DATA}),
}


