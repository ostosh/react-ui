import { List, Map, fromJS } from 'immutable';
import { combineReducers } from 'redux';

import validator from '../util/validator';
import { TOGGLE_MODAL, REGISTER_MODAL } from './actionTypes';

const modal = (state = Map({}), action) => {
  if(action.type === REGISTER_MODAL)
    return state.set(action.data.modal, Map({
      'open' : false,
    }));
  else if(action.type === TOGGLE_MODAL && state.has(action.data.modal))
    return state.updateIn([action.data.modal, 'open'], open => !open);
  else
    return state;
};

export  {
  modal,
}
