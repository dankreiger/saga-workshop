import { counterSagas, incrementCounter, watchFetchDogSuccess } from './sagas';

describe('all counter sagas', () => {
  describe('counterSagas', () => {
    let gen;
    beforeEach(() => {
      gen = counterSagas();
    });

    it('calls counterSagas watcher ', () => {});
  });
  describe('watchFetchDogSuccess', () => {
    let gen;
    beforeEach(() => {
      gen = watchFetchDogSuccess();
    });
    it('watches for the lates fetch dog success action', () => {});
  });

  describe('incrementCounter', () => {
    let gen;
    beforeEach(() => {
      gen = incrementCounter();
    });

    it('dispatches an increment action to the store', () => {});
  });
});
