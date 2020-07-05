import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer as root} from './root-reducer'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./root-saga";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const devTools = process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

const sagaMiddleware = createSagaMiddleware()

let enhancers = applyMiddleware(thunk, sagaMiddleware);
if(devTools) enhancers = compose(applyMiddleware(thunk, sagaMiddleware), devTools)

export const store = createStore(root, enhancers);

sagaMiddleware.run(rootSaga)