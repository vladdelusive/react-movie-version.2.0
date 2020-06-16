import {types} from "./actions";

const initialState = {
  movies: [],
  page: 1,
  loading: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
        loading: false,
        page: state.page + 1,
      };
    default:
      return state;
  }
}

export { reducer };
