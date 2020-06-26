import { types } from "./actions";
import { IMovies } from "react-app-env";
import {IAction} from "./actions";

const initialState = {
  movies: [] as Array<IMovies>,
  page: 1,
  loading: true,
};

export type IInitialStateNewMovies = typeof initialState;

function reducer(state = initialState, action: IAction<IMovies[]>): IInitialStateNewMovies {
  switch (action.type) {
    case types.LOAD_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
        loading: false,
        page: state.page + 1,
      };
    default:
      return state;
  }
}

export { reducer };
