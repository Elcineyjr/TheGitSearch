import React from 'react';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Route from '~/hocs/Route';
import Home from '~/pages/Home';

export default function Routes() {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </ThemeProvider>
  );
}
