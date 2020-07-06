import {IMovies, IReviewsMovies} from "react-app-env";

import {
    IAction,
    IActionPayloadData,
    IActionPayloadBadges,
    IActionPayload,
    IActionSaga
} from './types'

export const types = {
    LOAD_TOP_MOVIES: "@movies/top_movies/LOAD_TOP_MOVIES",
    GET_TOP_MOVIES: "@movies/top_movies/GET_TOP_MOVIES",

    SET_DATA_INFO: "@movies/movies_info/SET_DATA_INFO",
    GET_DATA_INFO: "@movies/movies_info/GET_DATA_INFO",

    SET_BADGES_INFO: "@movies/movies_info/SET_BADGES_INFO",
    TOGGLE_LOADING_INFO: "@movies/movies_info/TOGGLE_LOADING_INFO",

    ADD_REVIEW_INFO: "@movies/movies_info/ADD_REVIEW_INFO",
    SET_REVIEW_INFO: "@movies/movies_info/SET_REVIEW_INFO",
}

export const actions = {
    getMovies: () => ({type: types.GET_TOP_MOVIES}),
    saveMovies: (payload: IMovies[]): IAction<IMovies[]> => ({type: types.LOAD_TOP_MOVIES, payload}),

    doFetchData: (movieId: number) => ({type: types.GET_DATA_INFO, movieId}),
    setMovieIdData: ({results, trailer, cast, id, reviews}: IActionPayload): IActionPayloadData => ({type: types.SET_DATA_INFO, results, trailer, cast, id, reviews}),

    setBadges: (payload: [], id: number): IActionPayloadBadges => ({type: types.SET_BADGES_INFO, payload, id}),

    addReviewInfo: ({movieId, review}: {movieId: number, review: IReviewsMovies}): IActionSaga => ({type: types.ADD_REVIEW_INFO, movieId, review}),
    setReviewInfo: ({movieId, review}: {movieId: number, review: IReviewsMovies}): IActionSaga => ({type: types.SET_REVIEW_INFO, movieId, review})
}
