import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Router, {Route} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import initStore from './shell/store';
import NavigationBar from './component/navigation/navigationBar';
import Screens from './component/container/screens';
import Modals from './component/container/modals';

injectTapEventPlugin();

const store = initStore();

const App = (props) => (
  <div>
    <NavigationBar />
    <Screens />
    <Modals />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
);


