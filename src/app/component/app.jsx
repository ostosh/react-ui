import React from 'react';
import {Provider} from 'react-redux';
import Router, {Route} from 'react-router';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';

import AppBar from './navigation/appBar';
import LoginScreen from './view/loginScreen';


const routes = <Route path="/">
  <Route path="login" component={LoginScreen} />
  <Route path="" component={LoginScreen} />
  {/*<NotFoundRoute />*/}
</Route>;

export default React.createClass({
  render() {
    return (
     <Provider store={this.props.store}>
       <div>
       <AppBar />
       <Router>{routes}</Router>
       </div>
     </Provider>
    );
  },
});

