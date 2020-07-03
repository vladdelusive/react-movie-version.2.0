import { reducer as searchReducer } from "./search/reducer";
import { reducer as moviesReducer} from "store/movies/reducer";
import { reducer as actorsReducer} from "store/actors/reducer";
import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
  search: searchReducer,
  movies: moviesReducer,
  actors: actorsReducer,
  form: formReducer,
});
