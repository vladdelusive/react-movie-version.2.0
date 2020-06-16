import {types} from "./actions";

const initialState = {
  results: [],
  trailer: "",
  movieBadges: [],
  cast: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_DATA:
      return {
        ...state,
        results: action.results,
        trailer: action.trailer,
        cast: action.cast
      };
    case types.CLEAR_DATA:
      return {
        results: [],
        trailer: "",
        movieBadges: [],
        cast: [],
      };
    case types.SET_BADGES:
      return {
        ...state,
        movieBadges: action.payload,
      };

    default:
      return state;
  }
}

export { reducer };
