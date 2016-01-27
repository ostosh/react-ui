import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './component/app'; // Our custom react component

injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('app'));
