export const endpoints = {
    SEARCH_MOVIE: ({query, page = 1}) => `search/movie?query=${query}&page=${page}`,
    SEARCH_ACTOR: ({query, page = 1}) => `search/person?query=${query}&page=${page}`,
    NEWLY_MOVIES: ({page = 1}) =>`movie/upcoming?page=${page}`,
    TRENDY_ACTORS: ({page = 1}) => `trending/person/week?language=en-US&page=${page}`,
    ACTOR_MOVIES: ({personId}) => `person/${personId}/movie_credits?language=en-US`,
    ACTOR_DETAILS: ({personId}) => `person/${personId}?&language=en-US`,
    YOUTUBE_URL: ({movieId}) => `movie/${movieId}/videos`,
    MOVIE_DETAILS: ({movieId}) => `movie/${movieId}`,
    MOVIE_CAST: ({movieId}) => `movie/${movieId}/credits`,
}
