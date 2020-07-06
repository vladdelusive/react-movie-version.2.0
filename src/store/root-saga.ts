import { all, fork } from 'redux-saga/effects';
import {watchSagasMovies} from './movies/sagas';
import { watchSagasActors } from './actors/sagas'
import { watchSagasSearch } from "./search/sagas";

export const rootSaga = function* root() {
  yield all([fork(watchSagasActors), fork(watchSagasMovies), fork(watchSagasSearch)]);
};