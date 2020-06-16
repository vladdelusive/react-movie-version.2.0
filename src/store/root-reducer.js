import { reducer as searchReducer } from "./search/reducer";
import { combineReducers } from "redux";
import { reducer as moviesReducer} from "store/new-movies/reducer";

export const rootReducer = combineReducers({
  search: searchReducer,
  movies: moviesReducer,
});
