export const API_URL = process.env.REACT_APP_API_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;

export const SEARCH_URL = (word) => `${API_URL}search/movie?api_key=${API_KEY}&query=${word}`;

export const POPULAR_URL = (page = 1) => `${API_URL}movie/popular?api_key=${API_KEY}&page=${page}`;
export const TOP_URL = (page = 1) =>`${API_URL}movie/top_rated?api_key=${API_KEY}&page=${page}`;

export const IMAGE_URL = 'https://image.tmdb.org/t/p/';

export const YOUTUBE_URL = (movie) => `${API_URL}movie/${movie}/videos?api_key=${API_KEY}`

export const PAGE_URL = (page = 1) => `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`

export const ACTORS_PAGE_URL = (page = 1) => `${API_URL}trending/person/week?api_key=${API_KEY}&language=en-US&page=${page}`
export const ACTOR_DETAILS = (id) => `${API_URL}person/${id}?api_key=${API_KEY}&language=en-US`
export const ACTOR_MOVIES = (id) => `${API_URL}person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`

export const DEFAULT_TRAILER = "7R1N-8SoqcM"

export const EXTEND_SIZE = 'w780';

export const CARD_SIZE = 'w500';

export const SEARCH = "SEARCH";
export const TOP = "TOP";
export const POPULAR = "POPULAR";
export const ACTORS = "ACTORS";

export const FETCH_INTERVAL = 500;
