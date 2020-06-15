export const API_KEY = process.env.REACT_APP_API_KEY;

export const API = {
    SEARCH_MOVIE_PARAM_URL: (searchParam, page = 1) => `search/movie?api_key=${API_KEY}&query=${searchParam}&page=${page}`,
    SEARCH_ACTOR_PARAM_URL: (searchParam, page = 1) => `search/person?api_key=${API_KEY}&query=${searchParam}&page=${page}`,
    NEWLY_MOVIES_URL: (page = 1) =>`movie/upcoming?api_key=${API_KEY}&page=${page}`,
    TRENDY_ACTORS_URL: (page = 1) => `trending/person/week?api_key=${API_KEY}&language=en-US&page=${page}`,
    ACTOR_MOVIES: (id) => `person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`,
    ACTOR_DETAILS: (id) => `person/${id}?api_key=${API_KEY}&language=en-US`,
    YOUTUBE_URL: (movie) => `movie/${movie}/videos?api_key=${API_KEY}`,
    MOVIE_DETAILS: (movie) => `movie/${movie}?api_key=${API_KEY}`,
    MOVIE_CAST: (movie) => `movie/${movie}/credits?api_key=${API_KEY}`,
}

