import { call, takeLatest, put } from 'redux-saga/effects';
import { DogActionTypes } from './constants';
import { fetchDogSuccess, fetchDogFailure } from './actions';
import { api, dogUrl } from './utils';

export function* fetchDogRequestAsync() {
  try {
    const res = yield call(api, dogUrl);
    yield put(fetchDogSuccess(res.message));
  } catch (error) {
    yield put(fetchDogFailure(error));
  }
}

export function* watchFetchDogRequest() {
  yield takeLatest(DogActionTypes.FETCH_DOG_REQUEST, fetchDogRequestAsync);
}

export function* dogSaga() {
  yield call(watchFetchDogRequest);
}
