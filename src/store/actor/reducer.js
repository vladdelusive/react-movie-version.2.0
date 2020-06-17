import {types} from "./actions";

const initialState = {
  personInfo: {},
  loading: true,
  moviesInfo: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DATA:
      return {
        ...state,
        moviesInfo: action.movies,
        personInfo: action.person,
        loading: false
      };
    case types.CLEAR_DATA:
      return initialState
    default:
      return state;
  }
}

export { reducer };
