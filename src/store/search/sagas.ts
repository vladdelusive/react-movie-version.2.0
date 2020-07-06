import { put, takeEvery, call, all, delay, takeLatest } from 'redux-saga/effects'
import {API} from "services/api";
import {types, actions} from "./actions";
import {guards} from "services/api/guards";
import {IActionSaga, IActors} from "./types";
import {ICastMovies} from "react-app-env";
import {FETCH_TIMEOUT} from "constants/constants";

function* setActorsAndMovies({ query }: IActionSaga) {
    yield delay(FETCH_TIMEOUT)
    try {
        const {movies, actors} = yield all({
            movies: call(API.SEARCH_MOVIE, {query}),
            actors: call(API.SEARCH_ACTOR, {query}),
        });
        yield put(actions.setActorsAndMovies({actors: guards.movieResults(actors), movies: guards.movieResults(movies)}))
    } catch(e) {
        console.error(e)
    }
}

function* setActors({ query, page }: IActionSaga) {
    try {
        const fetched = yield call(API.SEARCH_ACTOR, {query, page})
        yield put(actions.setSearchActors({actors: guards.searchData<IActors>(fetched)}))
    } catch(e) {
        console.error(e)
    }
}

function* setMovies({ query, page }: IActionSaga) {
    try {
        const fetched = yield call(API.SEARCH_MOVIE,{query, page})
        yield put(actions.setMovies({movies: guards.searchData<ICastMovies>(fetched)}))
    } catch(e) {
        console.error(e)
    }
}


export function* watchSagasSearch() {
    yield takeEvery(types.GET_SEARCH_MOVIES, setMovies)
    yield takeEvery(types.GET_SEARCH_ACTORS, setActors)
    yield takeLatest(types.GET_ACTORS_MOVIES, setActorsAndMovies)
}
