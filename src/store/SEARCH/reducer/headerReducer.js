import {
  SEARCH_UPLOAD,
  SEARCH_OFFLOAD,
  SEARCH_TOGGLE,
  SEARCH_CLEAR,
  SEARCH_INPUT,
  SEARCH_MOVIES_PAGE,
  SEARCH_ACTORS_PAGE,
  SEARCH_RELOAD_PAGE,
  SEARCH_INPUT_IS_ACTIVE,
  SEARCH_BURGER
} from "../actions/actionTypes";

const initialState = {
  inputValue: "",
  showSearchedItems: false,
  resultsActors: null,
  resultsMovies: null,
  pageActors: 1,
  pageMovies: 1,
  burgerActive: false,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_UPLOAD:
      return {
        ...state,
        resultsActors: action.actors,
        resultsMovies: action.movies,
      };
    case SEARCH_OFFLOAD:
      return {
        ...state,
        resultsActors: null,
        resultsMovies: null,
      };
    case SEARCH_TOGGLE:
      return {
        ...state,
        showSearchedItems: action.payload,
      };
    case SEARCH_INPUT:
      return {
        ...state,
        inputValue: action.payload,
      };
    case SEARCH_CLEAR:
      return {
        inputValue: "",
        resultsActors: null,
        resultsMovies: null,
        showSearchedItems: false,
      };
    case SEARCH_MOVIES_PAGE:
      return {
        ...state,
        pageMovies: action.payload,
      };
    case SEARCH_ACTORS_PAGE:
      return {
        ...state,
        pageActors: action.payload,
      };
    case SEARCH_RELOAD_PAGE:
      return {
        ...state,
        pageActors: 1,
        pageMovies: 1,
      };
    case SEARCH_INPUT_IS_ACTIVE:
      return {
        ...state,
        inputOpen: action.payload
      };
    case SEARCH_BURGER:
      return {
        ...state,
        burgerActive: !state.burgerActive
      };
    default:
      return state;
  }
}
