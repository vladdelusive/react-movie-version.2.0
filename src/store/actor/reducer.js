import {types} from "./actions";

const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DATA:
      return {
          ...state,
          [action.id]: {
            moviesInfo: action.movies,
            personInfo: action.person,
          }
      }
    default:
      return state;
  }
}

export { reducer };
