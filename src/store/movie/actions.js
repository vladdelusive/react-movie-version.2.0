import {API} from "services/api";
import {DEFAULT_TRAILER} from "constants/constants";
import {guards} from 'services/api/guards'

export const types = {
    SET_DATA: "@movie/SET_DATA",
    SET_BADGES: "@movie/SET_BADGES",
    TOGGLE_LOADING: "@movie/TOGGLE_LOADING",
}

export const actions = {
    fetchData: movieId => async (dispatch) => {
        const fetches = [
            API.MOVIE_DETAILS({movieId}),
            API.YOUTUBE_URL({movieId}), 
            API.MOVIE_CAST({movieId}),
            API.MOVIE_REVIEWS({movieId})
        ];
        const [results, TRA, CAST, REVIEWS] = await Promise.all(fetches).then(([res, trail, cast, rev])=> {
            return [guards.actorDetails(res), guards.movieResults(trail), guards.actorMovies(cast), guards.movieResults(rev)];
        })
        const trailer = TRA[0] ? TRA[0].key : DEFAULT_TRAILER;
        return dispatch(actions.setMovieIdData({results, trailer, cast: CAST, id: movieId, reviews: REVIEWS}))
    },
    setMovieIdData: ({results, trailer, cast, id, reviews}) => ({type: types.SET_DATA, results, trailer, cast, id, reviews}),
    setBadges: (payload, id) => ({type: types.SET_BADGES, payload, id}),
    changeLoading: (payload) => ({type: types.TOGGLE_LOADING, payload}),
}


