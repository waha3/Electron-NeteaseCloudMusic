import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Header from './components/header.js';


export default (
  <Route path="/" component={Header}>
    <IndexRoute component={App} />
  </Route>
);
