/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './pages/Home';
import Recommendation from './pages/Recommendation';
import ApplyFont from './pages/ApplyFont';

const routes = () => (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/recommendation/" component={Recommendation} />
    <Route path="/applyFont/" component={ApplyFont} />
  </Route>
);

export default routes;
