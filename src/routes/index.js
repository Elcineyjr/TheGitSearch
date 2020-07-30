import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '~/hocs/Route';
import Home from '~/pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}
