import {types} from "./actions";

const initialState = {
  actors: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DATA:
      return {
        actors: {
          ...state.actors,
          [action.id]: {
            moviesInfo: action.movies,
            personInfo: action.person,
          }
        },
      }
    default:
      return state;
  }
}

export { reducer };
