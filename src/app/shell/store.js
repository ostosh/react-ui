import { createStore, applyMiddleware, combineReducers } from 'redux';

import * as reducers from './reducers';
import remoteMiddleware from './middlewear';

export default function(data) {
  let reducer = combineReducers(reducers);
  let finalCreateStore = applyMiddleware(remoteMiddleware)(createStore);
  let store = finalCreateStore(reducer, data);

  return store;
};
