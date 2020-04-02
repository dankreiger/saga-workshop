import {
  SUCCESS,
  FAILURE,
  ANOTHER_SUCCESS,
  ANOTHER_FAILURE
} from './constants';
import { combineReducers } from 'redux';

const anotherReducer = (state = {}, action) => {
  switch (action.type) {
    case ANOTHER_SUCCESS:
      return state;
    case ANOTHER_FAILURE:
      return state;
    default:
      return state;
  }
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SUCCESS:
      return state;
    case FAILURE:
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  reducer,
  anotherReducer
});
