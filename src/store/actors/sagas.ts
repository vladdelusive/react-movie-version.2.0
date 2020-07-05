import { put, takeEvery } from 'redux-saga/effects'
import {API} from "services/api";
import {types, actions} from "./actions";
import {guards} from "services/api/guards";
import {select} from 'redux-saga/effects'
import {IStore} from "react-app-env";

function* fetchTopActors() {
    const {page} = yield select(({actors}: IStore)=>actors.topActors)
    try {
        const results = yield API.TRENDY_ACTORS({page});
        yield put(actions.saveActors(guards.actData(results)))
    } catch(e) {
        console.error(e)
    }
}

export function* watchRequestTopActors() {
    yield takeEvery(types.GET_TOP_ACTORS, fetchTopActors);
}