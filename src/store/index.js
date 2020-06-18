import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from './root-reducer'

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

let enhancer = applyMiddleware(thunk);
if(devTools) enhancer = compose(applyMiddleware(thunk), devTools)

export const store = createStore(
  rootReducer,
  enhancer
)