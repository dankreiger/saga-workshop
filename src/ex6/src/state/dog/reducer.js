import { DogActionTypes as AT } from './constants';

const initialState = {
  image: 'https://images.dog.ceo/breeds/dachshund/dog-2643027_640.jpg'
};

export const dog = (
  state = initialState,
  { type, currentImage, currentBreed, error }
) => {
  switch (type) {
    case AT.FETCH_DOG_REQUEST:
      return {
        ...state,
        loading: true
      };
    case AT.FETCH_DOG_SUCCESS:
      return {
        ...state,
        loading: false,
        currentImage,
        currentBreed,
        [currentBreed]: currentImage
      };
    case AT.FETCH_DOG_FAILURE:
      return {
        ...state,
        loading: false,
        error
      };
    default:
      return state;
  }
};
