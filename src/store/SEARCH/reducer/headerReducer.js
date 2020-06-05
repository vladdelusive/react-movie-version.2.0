import {SEARCH_UPLOAD , SEARCH_OFFLOAD, SEARCH_TOGGLE, SEARCH_CLEAR, SEARCH_INPUT} from "../actions/actionTypes";

const initialState = {
    inputValue: "",
    showSearchedItems: false,
    resultsActors: null,
    resultsMovies: null,
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_UPLOAD:
            return {
                ...state,
                resultsActors: action.actors,
                resultsMovies: action.movies,
            }
        case SEARCH_OFFLOAD:
            return {
                ...state,
                resultsActors: null,
                resultsMovies: null,
            }
        case SEARCH_TOGGLE:
            return {
                ...state,
                showSearchedItems: action.payload
            }
        case SEARCH_INPUT:
            return {
                ...state,
                inputValue: action.payload
            }
        case SEARCH_CLEAR:
            return {
                inputValue: "",
                resultsActors: null,
                resultsMovies: null,
                showSearchedItems: false
            }
        default:
            return state
    }
}