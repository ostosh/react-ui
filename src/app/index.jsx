import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './component/app';
import initStore from './shell/store';

injectTapEventPlugin();

const store = initStore();

ReactDOM.render(
  <App store={store} />, 
  document.getElementById('app')
);
