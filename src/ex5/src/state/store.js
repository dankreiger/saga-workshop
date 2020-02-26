import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root.reducer';
import { rootSaga } from './root.sagas';

const middlewares = [thunk];
const enhancers = [];
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const persistedState = undefined;
const store = createStore(rootReducer, persistedState, composedEnhancers);

export default store;
