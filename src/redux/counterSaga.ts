import { call, put, takeLatest } from 'redux-saga/effects';

const delay = () => new Promise(resolve => {
  setTimeout(() => resolve(100),10000);
});

function* fetchMovies(action: any) {
  try {
    const movies = yield call(delay);
    yield put({type: "counter/incrementByAmount", payload: movies});
  } catch (e) {
    yield put({type: "counter/decrement", });
  }
}

function* counterSaga() {
  yield takeLatest("counter/increment", fetchMovies);
}

export default counterSaga;