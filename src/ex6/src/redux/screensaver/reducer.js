import { ActionTypes as AT } from './constants';

const initialState = {
  puppiesVisible: false,
  puppies: [],
  active: false,
  error: null
};

export const screenSaver = (state = initialState, action) => {
  switch (action.type) {
    case AT.START_SCREEN_SAVER:
      return {
        ...state,
        active: true
      };
    case AT.STOP_SCREEN_SAVER:
      return {
        ...state,
        active: false
      };
    case AT.SHOW_PUPPIES:
      return {
        ...state,
        puppiesVisible: true,
        puppies: action.payload
      };
    case AT.HIDE_PUPPIES:
      return {
        ...state,
        puppiesVisible: false
      };
    case AT.PUPPY_FELL_DOWN:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
