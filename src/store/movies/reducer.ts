import { types } from "./actions";
import { IMovies } from "react-app-env";
import {IAction} from "./actions";

const initialState = {
  topMovies: {
    movies: [] as Array<IMovies>,
    page: 1,
    loading: true,
  },
  moviesInfo: {}
};

export type IInitialStateNewMovies = typeof initialState;

function reducer(state = initialState, action: IAction<IMovies[]>): IInitialStateNewMovies {
  switch (action.type) {
    case types.LOAD_MOVIES:
      return {
        ...state,
        topMovies: {
          movies: [...state.topMovies.movies, ...action.payload],
          loading: false,
          page: state.topMovies.page + 1,
        }

      };
    default:
      return state;
  }
}

export { reducer };