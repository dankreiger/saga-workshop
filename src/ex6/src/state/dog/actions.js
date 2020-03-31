import { DogActionTypes as AT } from './constants';

export const fetchDogRequest = currentBreed => ({
  type: AT.FETCH_DOG_REQUEST,
  currentBreed
});

export const fetchDogSuccess = ({ currentImage, currentBreed }) => ({
  type: AT.FETCH_DOG_SUCCESS,
  currentImage,
  currentBreed
});

export const fetchDogFailure = ({ error }) => ({
  type: AT.FETCH_DOG_FAILURE,
  error
});
