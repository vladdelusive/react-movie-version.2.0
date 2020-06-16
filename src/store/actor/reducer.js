import {types} from "./actions";

const initialState = {
  personInfo: {},
  loading: true,
  moviesInfo: [],
  hideMovies: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_DATA:
      return {
        ...state,
        moviesInfo: action.movies,
        personInfo: action.person,
        loading: false
      };
    case types.HIDE_MOVIES:
      return {
        ...state,
        hideMovies: !state.hideMovies
      };
    case types.CLEAR_DATA:
      return {
        personInfo: {},
        moviesInfo: [],
        hideMovies: true,
        loading: true,
      };
    default:
      return state;
  }
}

export { reducer };
