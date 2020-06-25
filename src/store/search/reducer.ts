import {types} from "./actions";
import {ISearch} from "./types";

const initialState: ISearch = {
  inputValue: "",
  showSearchedItems: false,
  resultsActors: null,
  resultsMovies: null,
  burgerActive: false,
  inputOpen: false,
  pageActors: 1,
  pageMovies: 1,
  searchedMovies: [],
  searchedActors: [],
  loading: true,
  totalPagesMovies: 0,
  totalPagesActors: 0
};

export const reducer = (state = initialState, action: any): ISearch => {
  switch (action.type) {
    case types.UPLOAD_ACTORS_MOVIES:
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
        ...state,
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
    case types.SET_SEARCH_ACTORS:
      return {
        ...state,
        searchedActors: action.actors!.results,
        totalPagesActors: action.actors!.total_pages,
        loading: false
    };
    case types.SET_SEARCH_MOVIES:
      return {
        ...state,
        searchedMovies: action.movies!.results,
        totalPagesMovies: action.movies!.total_pages,
        loading: false
      };
    default:
      return state;
  }
}
