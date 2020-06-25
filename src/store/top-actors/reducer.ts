import {types} from "./actions";
import {ITopActors, IActionActors} from './types'

const initialState: ITopActors = {
  actors: [],
  page: 1,
  loading: true
};

const reducer = (state = initialState, action: IActionActors) => {
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
