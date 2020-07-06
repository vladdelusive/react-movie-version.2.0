import { all, fork } from 'redux-saga/effects';
import {watchRequestMovie, watchRequestTopMovies, watchPostReview} from './movies/sagas';
import {watchRequestActor, watchRequestTopActors} from './actors/sagas'

export const rootSaga = function* root() {
  yield all([fork(watchRequestTopMovies), fork(watchRequestTopActors), fork(watchRequestActor), fork(watchRequestMovie), fork(watchPostReview)]);
};