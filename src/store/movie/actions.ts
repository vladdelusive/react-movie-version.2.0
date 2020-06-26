import {API} from "services/api";
import {DEFAULT_TRAILER} from "constants/constants";
import {guards} from 'services/api/guards'
import {ICastActors, IMoviesState, IReviewsMovies} from "../../react-app-env";
import {ThunkAction} from "redux-thunk";

export const types = {
    SET_DATA: "@movie/SET_DATA",
    SET_BADGES: "@movie/SET_BADGES",
    TOGGLE_LOADING: "@movie/TOGGLE_LOADING",
    ADD_REVIEW: "@movie/ADD_REVIEW",
}

export type IActionPayloadData = {type: typeof types.SET_DATA} & IActionPayload
export type IActionPayloadBadges = {type: typeof types.SET_BADGES, payload: [], id: number}
export type IActionPayloadReviews = {type: typeof types.ADD_REVIEW, movieId: number, review: IReviewsMovies}

type IActionPayload = {
    id: number,
    results: IMoviesState,
    trailer: string,
    cast: Array<ICastActors>,
    reviews: [] | IReviewsMovies[],
}

export const actions = {
    fetchData: (movieId: number): ThunkAction<Promise<void>, unknown, unknown, IActionPayloadData> => async (dispatch) => {
        const fetches = [
            API.MOVIE_DETAILS({movieId}),
            API.YOUTUBE_URL({movieId}), 
            API.MOVIE_CAST({movieId}),
            API.MOVIE_REVIEWS({movieId})
        ];

        const [res, trail, cast, rev] = await Promise.all(fetches).then(([res, trail, cast, rev])=> {
            return [guards.detailsMov(res), guards.movieResults(trail), guards.actorMovies(cast), guards.movieResults(rev)];
        })
        const trailer = trail[0] ? trail[0].key : DEFAULT_TRAILER;
        dispatch(actions.setMovieIdData({results: res, trailer, cast: cast, id: movieId, reviews: rev}))
    },
    setMovieIdData: ({results, trailer, cast, id, reviews}: IActionPayload): IActionPayloadData => ({type: types.SET_DATA, results, trailer, cast, id, reviews}),

    setBadges: (payload: [], id: number): IActionPayloadBadges => ({type: types.SET_BADGES, payload, id}),

    addReview: ({movieId, review}: {movieId: number, review: IReviewsMovies}): ThunkAction<void, unknown, unknown, IActionPayloadReviews> => (dispatch) => {
        setTimeout(()=> {
            dispatch({type: types.ADD_REVIEW, movieId, review})
            console.table(review)
        },500)
    }
}


