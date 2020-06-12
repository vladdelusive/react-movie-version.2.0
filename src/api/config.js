export const API_KEY = process.env.REACT_APP_API_KEY;

export const SEARCH_MOVIE_PARAM_URL = (searchParam, page = 1) => `search/movie?api_key=${API_KEY}&query=${searchParam}&page=${page}`;
export const SEARCH_ACTOR_PARAM_URL = (searchParam, page = 1) => `search/person?api_key=${API_KEY}&query=${searchParam}&page=${page}`

export const NEWLY_MOVIES_URL = (page = 1) =>`movie/upcoming?api_key=${API_KEY}&page=${page}`;
export const TRENDY_ACTORS_URL = (page = 1) => `trending/person/week?api_key=${API_KEY}&language=en-US&page=${page}`

export const ACTOR_MOVIES = (id) => `person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`
export const ACTOR_DETAILS = (id) => `person/${id}?api_key=${API_KEY}&language=en-US`

export const YOUTUBE_URL = (movie) => `movie/${movie}/videos?api_key=${API_KEY}`


