import {
    SEARCH_TOGGLE,
    SEARCH_RELOAD_PAGE,
    SEARCH_MOVIES_PAGE,
    SEARCH_ACTORS_PAGE,
    SEARCH_CLEAR,
    SEARCH_INPUT_IS_ACTIVE,
    SEARCH_BURGER,
    SEARCH_INPUT,
    SEARCH_OFFLOAD, SEARCH_UPLOAD
} from './actionTypes'

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


