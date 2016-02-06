import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Router, {Route} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import initStore from './shell/store';

import NavigationBar from './component/navigation/navigationBar';
import LoginScreen from './component/view/loginScreen';
import BroadcastModal from './component/modal/broadcastModal';
import SearchModal from './component/modal/searchModal';
import SignupModal from './component/modal/signupModal';

injectTapEventPlugin();

const store = initStore();

const App = (props) => (
  <div>
    <NavigationBar />
    {props.children}
  </div>
)

const routes = <Route path="/" component={App} >
  <Route path="login" component={LoginScreen} />
</Route>;


ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>, 
  document.getElementById('app')
);


