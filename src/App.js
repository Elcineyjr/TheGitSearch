import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '~/store';
import history from './services/history';
import GlobalStyle from './style/globalStyle';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  );
}
