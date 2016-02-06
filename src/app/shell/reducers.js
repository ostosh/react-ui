import { Map } from 'immutable';
import { combineReducers } from 'redux';

import validator from '../util/validator';
import { OPEN_MODAL, CLOSE_MODAL } from './actionTypes';

const modals = (state = Map({active: 'NONE'}), action) => {
  if(action.type === OPEN_MODAL)
    return state.set('active', action.data.modal);
  else if (action.type === CLOSE_MODAL)
    return state.set('active', 'NONE');
  else
    return state;
};

export  {
  modals,
}
