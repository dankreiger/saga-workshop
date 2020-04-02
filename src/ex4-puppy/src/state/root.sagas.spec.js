import { all, call, takeLatest } from 'redux-saga/effects';
import {
  rootSaga,
  watchRequest,
  watchAnotherRequest,
  handleRequestAsync,
  handleAnotherRequestAsync
} from './root.sagas';
import { REQUEST, SUCCESS, ANOTHER_SUCCESS } from './constants';

// root
describe('rootSaga', () => {
  let gen;
  beforeEach(() => {
    gen = rootSaga();
  });

  it('calls the watchRequest and watchAnotherRequest saga watchers in parallel', () => {
    // hint: to call sagas in parallel, you need to do something like this:
    // yield all([call(watcherSaga1), call(watcherSaga2)]);
    expect(gen.next().value).toEqual(
      all([call(watchRequest), call(watchAnotherRequest)])
    );
    expect(gen.next().done).toBe(true);
  });
});

// watchers
describe('watchRequest', () => {
  let gen;
  beforeEach(() => {
    gen = watchRequest();
  });

  it('watches for the latest action of type "REQUEST". When this action is dispatched, it calls handleRequestAsync worker', () => {
    expect(gen.next().value).toEqual(takeLatest('REQUEST', handleRequestAsync));
    expect(gen.next().done).toBe(true);
  });
});

describe('watchAnotherRequest', () => {
  let gen;
  beforeEach(() => {
    gen = watchAnotherRequest();
  });

  it('watches for the latest action of type "ANOTHER_REQUEST". When this action is dispatched, it calls handleAnotherRequestAsync worker', () => {});
});

// workers
describe('handleRequestAsync', () => {
  let gen;
  beforeEach(() => {
    gen = handleRequestAsync();
  });

  it('dispatches action of type "SUCCESS"', () => {});
});

describe('handleAnotherRequestAsync', () => {
  let gen;
  beforeEach(() => {
    gen = handleAnotherRequestAsync();
  });

  it('dispatches action of type "ANOTHER_SUCCESS"', () => {});
});
