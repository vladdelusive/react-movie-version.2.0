import {types} from "./actions";

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
    case types.UPLOAD:
      return {
        ...state,
        resultsActors: action.actors,
        resultsMovies: action.movies,
      };
    case types.OFFLOAD_DATA:
      return {
        ...state,
        resultsActors: null,
        resultsMovies: null,
      };
    case types.TOGGLE_SUGGESTIONS:
      return {
        ...state,
        showSearchedItems: action.payload,
      };
    case types.SET_INPUT:
      return {
        ...state,
        inputValue: action.payload,
      };
    case types.CLEAR_ALL:
      return {
        inputValue: "",
        resultsActors: null,
        resultsMovies: null,
        showSearchedItems: false,
      };
    case types.MOVIES_PAGE:
      return {
        ...state,
        pageMovies: action.payload,
      };
    case types.ACTORS_PAGE:
      return {
        ...state,
        pageActors: action.payload,
      };
    case types.RELOAD_PAGE:
      return {
        ...state,
        pageActors: 1,
        pageMovies: 1,
      };
    case types.INPUT_IS_ACTIVE:
      return {
        ...state,
        inputOpen: action.payload,
      };
    case types.BURGER_TOGGLE:
      return {
        ...state,
        burgerActive: !state.burgerActive,
      };
    default:
      return state;
  }
}

export { reducer };
