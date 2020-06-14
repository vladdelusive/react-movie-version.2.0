import API from "http/index";
import { SEARCH_MOVIE_PARAM_URL, SEARCH_ACTOR_PARAM_URL} from "api/config";

export const SEARCH_UPLOAD = "SEARCH_UPLOAD";
export const SEARCH_OFFLOAD = "SEARCH_OFFLOAD";
export const SEARCH_TOGGLE = "SEARCH_TOGGLE";
export const SEARCH_INPUT = "SEARCH_INPUT";
export const SEARCH_CLEAR = "SEARCH_CLEAR";
export const SEARCH_MOVIES_PAGE = "SEARCH_MOVIES_PAGE";
export const SEARCH_ACTORS_PAGE = "SEARCH_ACTORS_PAGE";
export const SEARCH_RELOAD_PAGE = "SEARCH_RELOAD_PAGE";
export const SEARCH_INPUT_IS_ACTIVE = "SEARCH_INPUT_IS_ACTIVE";
export const SEARCH_BURGER = "SEARCH_BURGER";

export const ACSearchReloadPage = () => ({type: SEARCH_RELOAD_PAGE})
export const ACSearchClear = () => ({type: SEARCH_CLEAR})
export const ACSearchBurger = () => ({type: SEARCH_BURGER})
export const ACSearchOffload = () => ({type: SEARCH_OFFLOAD})

export const ACSearchToggle = (payload) => ({ type: SEARCH_TOGGLE, payload })
export const ACSearchMoviePage = (payload) => ({type: SEARCH_MOVIES_PAGE, payload})
export const ACSearchActorPage = (payload) => ({ type: SEARCH_ACTORS_PAGE, payload })
export const ACSearchInput = (payload) => ({type: SEARCH_INPUT, payload})
export const ACSearchUpload = ({actors, movies}) => ({type: SEARCH_UPLOAD, actors, movies})
export const ACSearchIsActive = (payload) => ({type: SEARCH_INPUT_IS_ACTIVE, payload})

export const ACSearchFetchInputValue = value => async (dispatch) => {
    const fetches = [
        API(SEARCH_MOVIE_PARAM_URL(value, 1)),
        API(SEARCH_ACTOR_PARAM_URL(value))
    ];
    const [MOVIES, ACTORS] = await Promise.all(fetches).then((res) =>
        Promise.all(res.map((r) => r.data))
    );
    return dispatch({
        type: SEARCH_UPLOAD, 
        actors: ACTORS.results, 
        movies: MOVIES.results
    })
}


