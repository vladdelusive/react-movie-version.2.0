import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from './root-reducer'

export const store = createStore(rootReducer, applyMiddleware(thunk));
