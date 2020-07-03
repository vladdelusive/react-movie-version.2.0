import {IParamsSearch} from "./index";

export const endpoints = {
    SEARCH_MOVIE: ({query, page = 1}: IParamsSearch): string => `search/movie?query=${query}&page=${page}`,
    SEARCH_ACTOR: ({query, page = 1}: IParamsSearch): string => `search/person?query=${query}&page=${page}`,
    NEWLY_MOVIES: ({page}: IParamsSearch): string => `movie/upcoming?page=${page}`,
    TRENDY_ACTORS: ({page = 1}: IParamsSearch): string => `trending/person/week?language=en-US&page=${page}`,
    ACTOR_MOVIES: ({personId}: {personId: number}): string => `person/${personId}/movie_credits?language=en-US`,
    ACTOR_DETAILS: ({personId}: {personId: number}): string => `person/${personId}?&language=en-US`,
    YOUTUBE_URL: ({movieId}: {movieId: number}): string => `movie/${movieId}/videos`,
    MOVIE_DETAILS: ({movieId}: {movieId: number}): string => `movie/${movieId}`,
    MOVIE_CAST: ({movieId}: {movieId: number}): string => `movie/${movieId}/credits`,
    MOVIE_REVIEWS: ({movieId}: {movieId: number}): string => `movie/${movieId}/reviews`
}


