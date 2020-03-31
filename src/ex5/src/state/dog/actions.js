import { DogActionTypes as AT } from './constants';
import { increment } from 'state/counter/actions';

export const fetchDogRequest = () => ({
  type: AT.FETCH_DOG_REQUEST
});

export const fetchDogSuccess = payload => ({
  type: AT.FETCH_DOG_SUCCESS,
  payload
});

export const fetchDogFailure = payload => ({
  type: AT.FETCH_DOG_FAILURE,
  payload
});

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());

  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(json => {
      dispatch(fetchDogSuccess(json.message));
      dispatch(increment());
    })
    .catch(err => dispatch(fetchDogFailure(err)));
};
