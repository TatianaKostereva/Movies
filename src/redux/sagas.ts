import { call, put, takeLatest } from 'redux-saga/effects';

import searchMovies from '../api/searchMovies';

function* fetchMovies(action: any) {
  try {
    const movies = yield call(searchMovies, action.payload.str);
    yield put({type: "MOVIES_FETCH_SUCCEEDED", movies: movies});
  } catch (e) {
    yield put({type: "MOVIES_FETCH_FAILED", message: e.message});
  }
}

function* mySaga() {
  yield takeLatest("MOVIES_FETCH_REQUESTED", fetchMovies);
}

export default mySaga;