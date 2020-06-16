import {endpoints} from "services/api/endpoints";
import {http} from "services/http";

export const API = {
    SEARCH_MOVIE: (payload) => {
        return http.get(endpoints.SEARCH_MOVIE(payload))
    },
    SEARCH_ACTOR: (payload) => {
        return http.get(endpoints.SEARCH_ACTOR(payload))
    },
    NEWLY_MOVIES: (payload) => {
        return http.get(endpoints.NEWLY_MOVIES(payload))
    },
    TRENDY_ACTORS: (payload) => {
        return http.get(endpoints.TRENDY_ACTORS(payload))
    },
    ACTOR_MOVIES: (payload) => {
        return http.get(endpoints.ACTOR_MOVIES(payload))
    },
    ACTOR_DETAILS: (payload) => {
        return http.get(endpoints.ACTOR_DETAILS(payload))
    },
    YOUTUBE_URL: (payload) => {
        return http.get(endpoints.YOUTUBE_URL(payload))
    },
    MOVIE_DETAILS: (payload) => {
        return http.get(endpoints.MOVIE_DETAILS(payload))
    },
    MOVIE_CAST: (payload) => {
        return http.get(endpoints.MOVIE_CAST(payload))
    },
}
