import {types} from "./actions";

const initialState = {
  actors: {},
  loading: true,
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
        loading: false
      }
    case types.CLEAR_DATA:
      return {
        ...state,
        loading: true
      }
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
