import { call, delay, takeLatest, put } from 'redux-saga/effects';
import { DogActionTypes } from './constants';
import { fetchDogSuccess, fetchDogFailure } from './actions';
import { api, dogUrl } from './utils';
import { increment } from 'state/counter/actions';

export function* fetchDogRequestAsync() {
  const abortController = new AbortController();
  try {
    const res = yield call(fetch, 'https://dog.ceo/api/breeds/image/random', {
      signal: abortController.signal
    });
    const json = yield res.json();
    yield put(fetchDogSuccess(json.message));
    yield put(increment());
  } catch (err) {
    yield put(fetchDogFailure());
  } finally {
    yield abortController.abort();
  }
}

export function* watchFetchDogRequest() {
  yield takeLatest('FETCH_DOG_REQUEST', fetchDogRequestAsync);
}

// root
export function* dogSaga() {
  yield call(watchFetchDogRequest);
}
