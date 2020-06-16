import {http} from "services/http";

export const API = {
    SEARCH_MOVIE_PARAM_URL: (searchParam, page = 1) => `search/movie?query=${searchParam}&page=${page}`,
    SEARCH_ACTOR_PARAM_URL: (searchParam, page = 1) => `search/person?query=${searchParam}&page=${page}`,
    NEWLY_MOVIES_URL: (page = 1) =>`movie/upcoming?page=${page}`,
    TRENDY_ACTORS_URL: (page = 1) => `trending/person/week?language=en-US&page=${page}`,
    ACTOR_MOVIES: (id) => `person/${id}/movie_credits?language=en-US`,
    ACTOR_DETAILS: (id) => `person/${id}?&language=en-US`,
    YOUTUBE_URL: (movie) => `movie/${movie}/videos`,
    MOVIE_DETAILS: (movie) => `movie/${movie}`,
    MOVIE_CAST: (movie) => `movie/${movie}/credits`,
}

// const endpoint = {
//     fetchData: '/fetch/data',
//     fetchDataId: (id) => '/fetch/data/'+id,
// }
//
// const api2 = {
//     fetchDataId: (payload) => {
//         return http.get(endpoint.fetchDataId(payload.id))
//     }
// }
