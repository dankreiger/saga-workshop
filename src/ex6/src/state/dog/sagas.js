import { call, cancelled, takeLatest, put, select } from 'redux-saga/effects';
import { fetchDogSuccess, fetchDogFailure, fetchDogRequest } from './actions';
import { api } from './utils';

/**
 * @param {Object} obj
 * @param {string} obj.currentBreed
 */
export function* fetchDogRequestAsync({ currentBreed }) {
  // hint - to access cached data in redux, use `select` from redux saga to get state from the store

  // if cache found...

  // else make new request
  try {
    const abortController = new AbortController();
    const options = { signal: abortController.signal };
    const res = yield call(api, currentBreed, options);

    yield put(fetchDogSuccess({ currentBreed, currentImage: res.message }));
  } catch (error) {
    yield put(fetchDogFailure({ error }));
  } finally {
    if (yield cancelled()) {
      // a cancelled saga will jump here: see https://redux-saga.js.org/docs/advanced/TaskCancellation.html
    }
  }
}

export function* watchFetchDogRequest() {
  yield takeLatest(fetchDogRequest().type, fetchDogRequestAsync);
}

export function* dogSaga() {
  yield call(watchFetchDogRequest);
}
