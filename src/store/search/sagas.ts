import { put, takeEvery, call, all } from 'redux-saga/effects'
import {API} from "services/api";
import {types, actions} from "./actions";
import {guards} from "services/api/guards";
import {IActors} from "./types";
import {ICastMovies} from "../../react-app-env";

function* setActorsAndMovies(action: any) {
    const { query } = action
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
export function* watchRequestActorsAndMovies() {
    yield takeEvery(types.GET_ACTORS_MOVIES, setActorsAndMovies);
}


function* setActors(action: any) {
    const { query, page } = action
    try {
        const fetched = yield call(API.SEARCH_ACTOR, {query, page})
        yield put(actions.setSearchActors({actors: guards.searchData<IActors>(fetched)}))
    } catch(e) {
        console.error(e)
    }
}
export function* watchRequestActors() {
    yield takeEvery(types.GET_SEARCH_ACTORS, setActors);
}


function* setMovies(action: any) {
    const { query, page } = action
    try {
        const fetched = yield call(API.SEARCH_MOVIE,{query, page})
        yield put(actions.setMovies({movies: guards.searchData<ICastMovies>(fetched)}))
    } catch(e) {
        console.error(e)
    }
}
export function* watchRequestMovies() {
    yield takeEvery(types.GET_SEARCH_MOVIES, setMovies);
}
