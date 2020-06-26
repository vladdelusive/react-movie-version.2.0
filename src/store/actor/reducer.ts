import {IAction, types} from "./actions";
import {ICastMovies, IDetailsActors, IPersonInfo} from "../../react-app-env";

interface IActorState {
    [key: number]: {
        moviesInfo: ICastMovies[],
        personInfo: (IDetailsActors & IPersonInfo)
    }
}

const initialState: IActorState = {};

function reducer(state = initialState, action: IAction) {
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
