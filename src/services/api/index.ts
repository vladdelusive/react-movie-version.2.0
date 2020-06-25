import {endpoints} from "services/api/endpoints";
import {http} from "services/http";

export interface IParamsSearch {
    query?: string,
    page?: number,
}

export const API = {
    NEWLY_MOVIES: (payload: IParamsSearch) => {
        return http.get(endpoints.NEWLY_MOVIES(payload))
    },
    TRENDY_ACTORS: (payload: IParamsSearch) => {
        return http.get(endpoints.TRENDY_ACTORS(payload))
    },
    ACTOR_MOVIES: (payload: {personId: number}) => {
        return http.get(endpoints.ACTOR_MOVIES(payload))
    },
    ACTOR_DETAILS: (payload: {personId: number}) => {
        return http.get(endpoints.ACTOR_DETAILS(payload))
    },
    YOUTUBE_URL: (payload: {movieId: number}) => {
        return http.get(endpoints.YOUTUBE_URL(payload))
    },
    MOVIE_DETAILS: (payload: {movieId: number}) => {
        return http.get(endpoints.MOVIE_DETAILS(payload))
    },
    MOVIE_CAST: (payload: {movieId: number}) => {
        return http.get(endpoints.MOVIE_CAST(payload))
    },
    SEARCH_MOVIE: (payload: IParamsSearch) => {
        return http.get(endpoints.SEARCH_MOVIE(payload))
    },
    SEARCH_ACTOR: (payload: IParamsSearch) => {
        return http.get(endpoints.SEARCH_ACTOR(payload))
    },
    MOVIE_REVIEWS: (payload: {movieId: number}) => {
        return http.get(endpoints.MOVIE_REVIEWS(payload))
    }
}
