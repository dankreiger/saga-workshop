import { combineReducers } from 'redux';
import { dog } from './dog/reducer';
import { counter } from './counter/reducer';

export default combineReducers({
  counter,
  dog
});
