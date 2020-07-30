import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import GlobalStyle from './style/globalStyle';
import Routes from './routes';

export default function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}
