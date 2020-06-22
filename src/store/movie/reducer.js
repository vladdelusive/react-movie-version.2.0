import {types} from "./actions";

const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DATA: 
      return {
        ...state,
        [action.id]: {
            results: action.results,
            trailer: action.trailer,
            cast: action.cast,
            reviews: action.reviews,
        }
      };
    case types.SET_BADGES:
      return {
          ...state,
          [action.id]: {
            ...state[action.id],
            movieBadges: action.payload,
          }
      };
    case types.ADD_REVIEW:
      return {
          ...state,
          [action.movieId]: {
            ...state[action.movieId],
            reviews: [...state[action.movieId].reviews, { ...action.review }],
          }
      }
    default:
      return state;
  }
}

export { reducer };
