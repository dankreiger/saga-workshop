import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  SUCCESS,
  ANOTHER_SUCCESS,
  REQUEST,
  ANOTHER_REQUEST
} from './constants';

const api = id => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

// api for effects
// https://redux-saga.js.org/docs/api/

/**
 * @title workers
 * @description executed sagas from watchers
 */
export function* handleAnotherRequestAsync() {}
export function* handleRequestAsync() {}

/**
 * @title watchers
 * @description watch for dispatched redux actions
 */
export function* watchAnotherRequest() {}

export function* watchRequest() {}

/**
 * @title root
 * @description good to have to allow scaling for multiple watchers
 */
export function* rootSaga() {
  yield all([call(watchRequest), call(watchAnotherRequest)]);
}
