import { types } from "./actions";
import { IActorsState, IActionTypes } from "./types";

const initialState: IActorsState = {
  topActors: {
    actors: [], 
    loading: true,
    page: 1,
  },
  actorsInfo: {},
};

const reducer = (state = initialState, action: IActionTypes) => {
  switch (action.type) {
    case types.LOAD_TOP_ACTORS:
      return {
        ...state,
        topActors: {
          actors: [...state.topActors.actors, ...action.payload],
          loading: false,
          page: state.topActors.page + 1,
        },
      };
    case types.SET_ACTOR_INFO:
      return {
        ...state,
        actorsInfo: {
          ...state.actorsInfo,
          [action.id]: {
            moviesInfo: action.movies,
            personInfo: action.person,
          },
        },
      };
    default:
      return state;
  }
};

export { reducer };
