import { call } from 'redux-saga/effects';
import { watchScreensaverActive } from './screensaver/sagas';

export function* rootSaga() {
  yield call(watchScreensaverActive);
}
