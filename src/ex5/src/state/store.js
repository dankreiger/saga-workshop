import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root.reducer';
import { rootSaga } from './root.sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware];
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

sagaMiddleware.run(rootSaga);

export default store;
