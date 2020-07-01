import {IMovieInfo} from "store/movies/types";
import {IReviewsMovies} from "react-app-env";

export interface IPropsReviews {
    movieInfo: IMovieInfo,
    addReview: ({movieId, review}: {movieId: number, review: IReviewsMovies}) => void,
    movieId: number
}