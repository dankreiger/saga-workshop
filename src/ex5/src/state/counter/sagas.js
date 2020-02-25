import { put, takeLatest } from 'redux-saga/effects';
import { fetchDogSuccess } from 'state/dog/actions';

export function* counterAsync() {
  yield put({ type: 'INCREMENT' });
}

export function* counterSaga() {
  yield takeLatest(fetchDogSuccess().type, counterAsync);
}
