import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root.sagas';
import rootReducer from './root.reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
