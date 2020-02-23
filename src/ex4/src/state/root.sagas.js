import { all, call } from 'redux-saga/effects';
import { dogSaga } from './dog/sagas';
import { counterSaga } from './counter/sagas';

export function* rootSaga() {
  yield all([call(dogSaga), call(counterSaga)]);
}