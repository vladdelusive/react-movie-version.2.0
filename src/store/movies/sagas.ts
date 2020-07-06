import {put, takeEvery, call, all, delay} from 'redux-saga/effects'
import {API} from "services/api";
import {types, actions} from "./actions";
import {guards} from "services/api/guards";
import {select} from 'redux-saga/effects'
import {IStore} from "react-app-env";
import {DEFAULT_TRAILER} from "constants/constants";

function* fetchTopMovies() {
    try {
        const {page} = yield select(({movies}: IStore) => movies.topMovies);
        const results = yield call(API.NEWLY_MOVIES, page)
        yield put(actions.saveMovies(guards.movData(results)))
    } catch (e) {
        console.error(e)
    }
}

function* fetchMovieData(action: any) {
    const { movieId }: {movieId: number} = action
    try {
        const { res, trail, castAct, rev } = yield all({
            res: call(API.MOVIE_DETAILS, {movieId}),
            trail: call(API.YOUTUBE_URL, {movieId}),
            castAct: call(API.MOVIE_CAST, {movieId}),
            rev: call(API.MOVIE_REVIEWS, {movieId}),
        });
        const tra = guards.movieResults(trail);
        const trailer = tra[0] ? tra[0].key : DEFAULT_TRAILER;
        yield put(actions.setMovieIdData({
            trailer,
            id: movieId,
            results: guards.detailsMov(res),
            cast: guards.actorMovies(castAct),
            reviews: guards.movieResults(rev),
        }))
    } catch(e) {
        console.error(e)
    }
}

function* setMovieReview(action: any) {
    yield delay(600)
    const {movieId, review} = action
    console.table(review)
    yield put(actions.setReviewInfo({movieId, review}))
}


export function* watchSagasMovies() {
    yield takeEvery(types.ADD_REVIEW_INFO, setMovieReview)
    yield takeEvery(types.GET_DATA_INFO, fetchMovieData)
    yield takeEvery(types.GET_TOP_MOVIES, fetchTopMovies)
}
