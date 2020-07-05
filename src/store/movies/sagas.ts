import { put, takeEvery } from 'redux-saga/effects'
import {API} from "services/api";
import {types, actions} from "./actions";
import {guards} from "services/api/guards";
import {select} from 'redux-saga/effects'
import {IStore} from "react-app-env";

function* fetchTopMovies() {
    try {
        const {page} = yield select(({movies}: IStore)=> movies.topMovies);
        const results = yield API.NEWLY_MOVIES({page});
        yield put(actions.saveMovies(guards.movData(results)))
    } catch (e) {
        console.error(e)
    }
}

export function* watchRequestTopMovies() {
    yield takeEvery(types.GET_TOP_MOVIES, fetchTopMovies);
}