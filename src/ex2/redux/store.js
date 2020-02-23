import { createStore } from "./lib/createStore";
import { counter } from "./counter/reducer";
import { dog } from "./dog/reducer";
import applyMiddleware from "./lib/applyMiddleware";
import { combineReducers } from "./lib/combineReducers";
import logger from './middlewares/logger';
import thunk from './middlewares/thunk';

const middlewares = [logger, thunk];

const rootReducer = combineReducers({
  counter,
  dog
})

const preloadedState = undefined;
export const storeInstance = createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));

// so we can debug in the browser
window.store = storeInstance;

export const store = storeInstance;