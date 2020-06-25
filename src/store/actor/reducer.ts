import {types} from "./actions";

const initialState: any = {};

function reducer(state = initialState, action: any) {
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
