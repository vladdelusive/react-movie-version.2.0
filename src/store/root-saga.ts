import { all, fork } from 'redux-saga/effects';
import {watchRequestMovie, watchRequestTopMovies, watchPostReview} from './movies/sagas';
import {watchRequestActor, watchRequestTopActors} from './actors/sagas'
import {watchRequestActors, watchRequestActorsAndMovies, watchRequestMovies} from "./search/sagas";

export const rootSaga = function* root() {
  yield all([fork(watchRequestTopActors), fork(watchRequestActor),
    fork(watchRequestTopMovies), fork(watchRequestMovie), fork(watchPostReview),
    fork(watchRequestActorsAndMovies), fork(watchRequestActors), fork(watchRequestMovies),
  ]);
};