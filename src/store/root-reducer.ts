import { reducer as searchReducer } from "./search/reducer";
import { combineReducers } from "redux";
import { reducer as moviesReducer} from "store/movies/reducer";
import { reducer as actorsReducer} from "store/actors/reducer";

export const rootReducer = combineReducers({
  search: searchReducer,
  movies: moviesReducer,
  actors: actorsReducer,
});
