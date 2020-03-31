import { takeLatest } from 'redux-saga/effects';
import { dogSaga, watchFetchDogRequest, fetchDogRequestAsync } from './sagas';
import { fetchDogRequest } from './actions';

describe('all dog sagas', () => {
  describe('dogSaga', () => {
    let gen;
    beforeEach(() => {
      gen = dogSaga();
    });

    it('calls watchFetchDogRequest watcher', () => {});
  });

  describe('watchFetchDogRequest', () => {
    let gen;
    beforeEach(() => {
      gen = watchFetchDogRequest();
    });

    it('watches for the latest action of type "FETCH_DOG_REQUEST", and on receiving it calls fetchDogRequestAsync', () => {
      expect(gen.next().value).toEqual(
        takeLatest(fetchDogRequest().type, fetchDogRequestAsync)
      );
    });
  });

  describe('fetchDogRequestAsync', () => {
    let gen;
    const currentBreed = 'beagle';
    beforeEach(() => {
      gen = fetchDogRequestAsync({ currentBreed });
    });

    it('calls the dog api, receives a successful response, and then dispatches fetchDogSuccess', () => {});

    it('calls the dog api, receives an error response, and then dispatches fetchDogFailure', () => {});
  });
});
