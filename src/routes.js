import React from 'react';
import {Route} from 'react-router';

import Main from './app/components/main';
import Home from './app/components/home/home';
import Doc from './app/components/doc/doc';

export default (
  <Route component={Main}>
    <Route path="/" component={Home}/>
    <Route path="/doc" component={Doc}/>
  </Route>
);
