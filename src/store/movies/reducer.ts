import { types } from "./actions";
import { IMoviesState, IActionTypes } from './types'

const initialState: IMoviesState = {
  topMovies: {
    movies: [],
    page: 1,
    loading: true,
  },
  moviesInfo: {},
};

function reducer(
  state = initialState,
  action: IActionTypes
): IMoviesState {
  switch (action.type) {
    case types.GET_TOP_MOVIES:
      return state
    case types.LOAD_TOP_MOVIES:
      debugger
      return {
        ...state,
        topMovies: {
          movies: [...state.topMovies.movies, ...action.payload],
          loading: false,
          page: state.topMovies.page + 1,
        },
      };
    case types.SET_DATA_INFO:
      return {
        ...state,
        moviesInfo: {
          ...state.moviesInfo,
          [action.id]: {
            results: action.results,
            trailer: action.trailer,
            cast: action.cast,
            reviews: action.reviews,
            movieBadges: [],
          },
        },
      };
    case types.SET_BADGES_INFO:
      return {
        ...state,
        moviesInfo: {
          ...state.moviesInfo,
          [action.id]: {
            ...state.moviesInfo[action.id],
            movieBadges: action.payload,
          },
        },
      };
    case types.ADD_REVIEW_INFO:
      return {
        ...state,
        moviesInfo: {
          ...state.moviesInfo,
          [action.movieId]: {
            ...state.moviesInfo[action.movieId],
            reviews: [
              ...state.moviesInfo[action.movieId].reviews, { ...action.review },
            ],
          },
        },
      };
    default:
      return state;
  }
}

export { reducer };
