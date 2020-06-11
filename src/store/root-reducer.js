import { reducer as searchReducer } from "./search/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  search: searchReducer,
});
