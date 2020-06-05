import {SEARCH_UPLOAD , SEARCH_OFFLOAD, HEADER_TOGGLE, HEADER_CLEAR, HEADER_INPUT} from "../../actions/actionTypes";

const initialState = {
    inputValue: "",
    showSearchedItems: false,
    resultsActors: null,
    resultsMovies: null,
}

export default function headerReducer(state = initialState, action) {
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
        case HEADER_TOGGLE:
            return {
                ...state,
                showSearchedItems: action.payload
            }
        case HEADER_INPUT:
            return {
                ...state,
                inputValue: action.payload
            }
        case HEADER_CLEAR:
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