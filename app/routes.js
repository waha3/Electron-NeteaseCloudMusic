import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Common from './containers/Common.js';
import FindMusic from './containers/FindMusic.js';


export default (
  <Route path="/" component={Common}>
    <IndexRoute component={App} />
    <Route path="findmusic" component={FindMusic} />
  </Route>
);
