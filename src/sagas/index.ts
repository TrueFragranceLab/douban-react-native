import { call, put, all, takeEvery } from 'redux-saga/effects'
import { ActionTypes } from '../actions/movie'
import { getMovieList } from '../services/movie'

export function* getMovieDataRequest() {
  const res = yield call(getMovieList)
  const data = yield res.json()
  yield put({
    type: ActionTypes.GET_MOVIE_SUCCESS,
    movies: data.subjects,
  })
}

export function* watchGetMovieDataRequest() {
  yield takeEvery(ActionTypes.GET_MOVIE_REQUEST, getMovieDataRequest)
}

function* rootSaga() {
  yield all([watchGetMovieDataRequest()])
}

export default rootSaga
