import searchReducer from "./SEARCH/reducer/headerReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    search: searchReducer
})
export default rootReducer