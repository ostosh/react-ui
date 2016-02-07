import React from 'react';
import Router, {Route} from 'react-router';

import Login from '../form/login';

const Screens = () => {
  return(
    <Router>
      <Route path="/" >
        <Route path="login" component={Login} />
      </Route>
    </Router>
  );
};

export default Screens;


