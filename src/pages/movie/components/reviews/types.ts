import {IMovieInfo} from "store/movies/types";
import {IReviewsMovies} from "react-app-env";

export interface IPropsReviews {
    movieInfo: IMovieInfo,
    addReview: ({movieId, review}: {movieId: number, review: IReviewsMovies}) => void,
    movieId: number
}

export interface IValuesForm<T> {
    comment?: string,
    name?: string,
    email?: string,
    photo?: T,
}

export interface IFile {
    size: number,
    type: string
}

export type IAddPost = (values: any, rate: number) => void
