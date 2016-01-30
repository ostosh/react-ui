import React from 'react';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';


import AppBar from './navigation/appBar';
import ScreenContainer from './view/start';


export default React.createClass({
  render() {
    return (
      <div>
        <AppBar />
        <ScreenContainer />
      </div>
    );
  },
});

