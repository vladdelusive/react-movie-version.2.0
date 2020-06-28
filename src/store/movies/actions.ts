import {API} from "services/api";
import {guards} from 'services/api/guards'
import {ThunkAction} from "redux-thunk";
import {IMovies, IStore, IReviewsMovies} from "react-app-env";
import {DEFAULT_TRAILER} from "constants/constants";
import { IAction, IActionPayloadData, IActionPayloadBadges, IActionPayloadReviews, IActionPayload} from './types'

export const types = {
    LOAD_TOP_MOVIES: "@movies/top_movies/LOAD_TOP_MOVIES",
    SET_DATA_INFO: "@movies/movies_info/SET_DATA_INFO",
    SET_BADGES_INFO: "@movies/movies_info/SET_BADGES_INFO",
    TOGGLE_LOADING_INFO: "@movies/movies_info/TOGGLE_LOADING_INFO",
    ADD_REVIEW_INFO: "@movies/movies_info/ADD_REVIEW_INFO",
}

export const actions = {
    fetchMovies: (): ThunkAction<Promise<void>, IStore, unknown, IAction<IMovies[]>> => async (dispatch, getState) => {
        const {page} = getState().movies.topMovies
        const results = await API.NEWLY_MOVIES({page});
        dispatch(actions.saveMovies(guards.movData(results)))
    },
    saveMovies: (payload: IMovies[]): IAction<IMovies[]> => ({type: types.LOAD_TOP_MOVIES, payload}),


    fetchData: (movieId: number): ThunkAction<Promise<void>, unknown, unknown, IActionPayloadData> => async (dispatch) => {
        const fetches = [
            API.MOVIE_DETAILS({movieId}),
            API.YOUTUBE_URL({movieId}), 
            API.MOVIE_CAST({movieId}),
            API.MOVIE_REVIEWS({movieId})
        ];
        const [res, trail, cast, rev] = await Promise.all(fetches).then(([res, trail, cast, rev])=> {
            return [guards.detailsMov(res), guards.movieResults(trail), guards.actorMovies(cast), guards.movieResults(rev)];
        })
        const trailer = trail[0] ? trail[0].key : DEFAULT_TRAILER;
        dispatch(actions.setMovieIdData({results: res, trailer, cast: cast, id: movieId, reviews: rev}))
    },
    setMovieIdData: ({results, trailer, cast, id, reviews}: IActionPayload): IActionPayloadData => ({type: types.SET_DATA_INFO, results, trailer, cast, id, reviews}),

    setBadges: (payload: [], id: number): IActionPayloadBadges => ({type: types.SET_BADGES_INFO, payload, id}),

    addReview: ({movieId, review}: {movieId: number, review: IReviewsMovies}): ThunkAction<void, unknown, unknown, IActionPayloadReviews> => (dispatch) => {
        setTimeout(()=> {
            dispatch({type: types.ADD_REVIEW_INFO, movieId, review})
            console.table(review)
        },500)
    }
}
