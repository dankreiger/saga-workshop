import { all, call } from 'redux-saga/effects';
import { dogSaga } from './dog/sagas';

export function* rootSaga() {
  yield all([call(dogSaga)]);
}
