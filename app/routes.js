import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Common from './containers/Common.js';
import FindMusic from './containers/FindMusic.js';
import PrivateFM from './containers/PrivateFM.js';


export default (
  <Route path="/" component={Common}>
    <IndexRoute component={FindMusic} />
    <Route path="privateFM" component={PrivateFM} />
  </Route>
);
