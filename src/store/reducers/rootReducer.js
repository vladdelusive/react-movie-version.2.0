import headerReducer from "./headerReducer/headerReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    header: headerReducer
})
export default rootReducer