/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './pages/Home';
import HorizontalFlow from './pages/HorizontalFlow';

const routes = () => (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/horizontal/" component={HorizontalFlow} />
  </Route>
);

export default routes;
