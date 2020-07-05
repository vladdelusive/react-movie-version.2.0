import { all, fork } from 'redux-saga/effects';
import { watchRequestTopMovies } from './movies/sagas';
import { watchRequestTopActors } from './actors/sagas'

export const rootSaga = function* root() {
  yield all([fork(watchRequestTopMovies), fork(watchRequestTopActors)]);
};