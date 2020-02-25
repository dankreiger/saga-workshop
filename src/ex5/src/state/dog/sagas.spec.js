import { call, takeLatest, put } from 'redux-saga/effects';
import { dogSaga, watchFetchDogRequest, fetchDogRequestAsync } from './sagas';
import { DogActionTypes } from './constants';
import { dogUrl, api } from './utils';
import { fetchDogSuccess, fetchDogFailure } from './actions';

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

    it('watches for the latest action of type "FETCH_DOG_REQUEST"', () => {
      expect(gen.next().value).toEqual(
        takeLatest(DogActionTypes.FETCH_DOG_REQUEST, fetchDogRequestAsync)
      );
    });
  });

  describe('fetchDogRequestAsync', () => {
    let gen;
    beforeEach(() => {
      gen = fetchDogRequestAsync();
    });

    it('calls the dog api, receives a successful response, and then dispatches fetchDogSuccess', () => {
      expect(gen.next().value).toEqual(call(api, dogUrl));
      expect(gen.next({ message: 'some/image.png' }).value).toEqual(
        put(fetchDogSuccess('some/image.png'))
      );
    });

    it('calls the dog api, receives an error response, and then dispatches fetchDogFailure', () => {
      expect(gen.next().value).toEqual(call(api, dogUrl));
      expect(gen.throw('error').value).toEqual(put(fetchDogFailure('error')));
    });
  });
});
