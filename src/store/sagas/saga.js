import { put, takeEvery } from 'redux-saga/effects'
import {API} from "services/api";
import {types} from "../movies/actions";
import {guards} from "services/api/guards";
import {select } from 'redux-saga/effects'

function* fetchNewMovies(action) {
    try {
        const {page} = yield select(({movies})=>movies.topMovies);
        const results = yield API.NEWLY_MOVIES({page});
        yield put({type: types.LOAD_TOP_MOVIES, payload: guards.movData(results)});
    } catch (e) {
        console.error(e)
    }
}

export function* mySaga() {
    yield takeEvery(types.GET_TOP_MOVIES, fetchNewMovies);
}