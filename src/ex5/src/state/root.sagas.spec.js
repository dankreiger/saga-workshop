import { all, call } from 'redux-saga/effects';
import { rootSaga } from './root.sagas';
import { dogSaga } from './dog/sagas';
import { counterSaga } from './counter/sagas';

describe('rootSaga', () => {
  let gen;
  beforeEach(() => {
    gen = rootSaga();
  });

  it('calls the dogSaga and the counter saga concurrently', () => {});
});
