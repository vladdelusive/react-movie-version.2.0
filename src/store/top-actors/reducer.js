import {types} from "./actions";

const initialState = {
  actors: [],
  page: 1,
  loading: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ACTORS:
      return {
        ...state,
        actors: [...state.actors, ...action.payload],
        loading: false,
        page: state.page + 1,
      };
    default:
      return state;
  }
}

export { reducer };
