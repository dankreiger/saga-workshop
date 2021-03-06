import {
  call,
  cancelled,
  cancel,
  delay,
  fork,
  put,
  select,
  take
} from 'redux-saga/effects';
import { ActionTypes as AT, numberOfPups } from './constants';

const url = `https://dog.ceo/api/breed/hound/images/random/${numberOfPups}`;

export function* apiCall() {
  try {
    const promise = yield fetch(url);
    const { message } = yield promise.json();
    return message;
  } catch (error) {
    yield put({ type: AT.PUPPY_FELL_DOWN, payload: error }); // will throw error boundary
  }
}

export function* initiateScreensaver() {
  const noErrors = yield select(({ screenSaver }) => !screenSaver.error);
  try {
    while (noErrors) {}
  } finally {
    if (yield cancelled()) {
    }
  }
}

export function* watchScreensaverActive() {
  while (yield take(AT.START_SCREEN_SAVER)) {}
}
