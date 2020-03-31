import { all, call } from 'redux-saga/effects';
import { rootSaga } from './root.sagas';
import { dogSaga } from './dog/sagas';

describe('rootSaga', () => {
  let gen;
  beforeEach(() => {
    gen = rootSaga();
  });

  it('calls the dogSaga ', () => {
    expect(gen.next().value).toEqual(all([call(dogSaga)]));
  });
});
