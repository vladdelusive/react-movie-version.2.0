import {
    SEARCH_TOGGLE,
    SEARCH_RELOAD_PAGE,
    SEARCH_MOVIES_PAGE,
    SEARCH_ACTORS_PAGE,
    SEARCH_CLEAR
  } from './actionTypes'

export const ACSearchToggle = (payload) => {
    return { type: SEARCH_TOGGLE, payload }
}
export const ACSearchReloadPage = { type: SEARCH_RELOAD_PAGE }

export const ACSearchMoviePage = (payload) => {
    return {type: SEARCH_MOVIES_PAGE, payload}
}
export const ACSearchActorPage = (payload) => {
    return { type: SEARCH_ACTORS_PAGE, payload }
}
export const ACSearchClear = {type: SEARCH_CLEAR}
