import {
  SEARCH_UPLOAD,
  SEARCH_OFFLOAD_DATA,
  SEARCH_TOGGLE_SUGGESTIONS,
  SEARCH_CLEAR,
  SEARCH_SET_INPUT,
  SEARCH_MOVIES_PAGE,
  SEARCH_ACTORS_PAGE,
  SEARCH_RELOAD_PAGE,
  SEARCH_INPUT_IS_ACTIVE,
  SEARCH_BURGER_TOGGLE,
} from "./actions"; 

const initialState = {
  inputValue: "",
  showSearchedItems: false,
  resultsActors: null,
  resultsMovies: null,
  pageActors: 1,
  pageMovies: 1,
  burgerActive: false,
  inputOpen: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_UPLOAD:
      return {
        ...state,
        resultsActors: action.actors,
        resultsMovies: action.movies,
      };
    case SEARCH_OFFLOAD_DATA:
      return {
        ...state,
        resultsActors: null,
        resultsMovies: null,
      };
    case SEARCH_TOGGLE_SUGGESTIONS:
      return {
        ...state,
        showSearchedItems: action.payload,
      };
    case SEARCH_SET_INPUT:
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
        inputOpen: action.payload,
      };
    case SEARCH_BURGER_TOGGLE:
      return {
        ...state,
        burgerActive: !state.burgerActive,
      };
    default:
      return state;
  }
}

export { reducer }
