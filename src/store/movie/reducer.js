import {types} from "./actions";

const initialState = {
  movies: {},
  loading: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DATA:
      return {
        movies: {
          ...state.movies,
          [action.id]: {
            results: action.results,
            trailer: action.trailer,
            cast: action.cast,
          }
        }
      };
    case types.SET_BADGES:
      return {
        movies: {
          ...state.movies,
          [action.id]: {
            ...state.movies[action.id],
            movieBadges: action.payload,
          }
        }
      };
    case types.TOGGLE_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
}

export { reducer };
