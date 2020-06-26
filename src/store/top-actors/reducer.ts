import {IAction, types} from "./actions";
import {ITopActorsState, IActorsResult} from './types'

const initialState: ITopActorsState = {
  actors: [],
  page: 1,
  loading: true
};
 
const reducer = (state = initialState, action: IAction<IActorsResult[]>): ITopActorsState => {
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
