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
            reviews: action.reviews,
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
    case types.ADD_REVIEW:
      return {
        ...state,
        movies: {
          ...state.movies,
          [action.movieId]: {
            ...state.movies[action.movieId],
            reviews: [...state.movies[action.movieId].reviews, { ...action.review }],
          }
        }
      }

    default:
      return state;
  }
}

export { reducer };
