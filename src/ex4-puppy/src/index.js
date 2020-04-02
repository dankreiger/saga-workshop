import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import './index.css';
import App from './components/App/App';
import store from 'state/store';

/* using hash router for static deploy */
ReactDOM.render(
  <Provider store={store}>
    {process.env.NODE_ENV === 'production' ? (
      <HashRouter basename="/">
        <App />
      </HashRouter>
    ) : (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )}
  </Provider>,
  document.getElementById('root')
);
