import { IMovieState, ICastActors, IReviewsMovies, IMovies } from 'react-app-env'
import { types } from './actions'

export interface IMoviesState {
    topMovies: ITopMoviesSection,
    moviesInfo: IMovieInfoSection
}

export interface IMovieInfoSection {
    [key: number]: IMovieInfo
}

export interface ITopMoviesSection {
    movies: IMovies[],
    page: number,
    loading: boolean,
}

export interface IMovieInfo {
    results: IMovieState,
    trailer: string,
    cast: Array<ICastActors>,
    reviews: IReviewsMovies[],
    movieBadges: []
}

export interface IAction<T = Record<any, any>> {
    type: string,
    payload: T
}

export type IActionPayloadData = {type: typeof types.SET_DATA_INFO} & IActionPayload
export type IActionPayloadBadges = {type: typeof types.SET_BADGES_INFO, payload: [], id: number}
export type IActionPayloadReviews = {type: typeof types.ADD_REVIEW_INFO, movieId: number, review: IReviewsMovies}

export type IActionPayload = {
    id: number,
    results: IMovieState,
    trailer: string,
    cast: Array<ICastActors>,
    reviews: [] | IReviewsMovies[],
}

export type IActionTypes = IActionPayloadBadges & IActionPayloadData & IActionPayloadReviews 

