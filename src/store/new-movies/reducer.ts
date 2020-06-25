import { types } from "./actions";
import { IMovies } from "react-app-env";

const initialState = {
  movies: [] as Array<IMovies>,
  page: 1,
  loading: true,
};

type IInitialStateNewMovies = typeof initialState;

function reducer(state = initialState, action: any): IInitialStateNewMovies {
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
