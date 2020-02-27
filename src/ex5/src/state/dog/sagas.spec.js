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
      // hint: you should use takeLatest from redux saga - first argument is the action type, and the second argument is the saga to be invoked
    });
  });

  describe('fetchDogRequestAsync', () => {
    let gen;
    beforeEach(() => {
      gen = fetchDogRequestAsync();
    });

    it('calls the dog api, receives a successful response, and then dispatches fetchDogSuccess', () => {});

    it('calls the dog api, receives an error response, and then dispatches fetchDogFailure', () => {});
  });
});
