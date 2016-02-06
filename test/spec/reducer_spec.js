import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import { OPEN_MODAL, CLOSE_MODAL } from '../../src/app/shell/actionTypes';
import { modals } from '../../src/app/shell/reducers';

describe('modals reducer', () => {
  
  it('it inits state without initial state', () => {
    let stateAfter = modals(undefined, {type:'TEST'});     
    expect(stateAfter).to.equal(fromJS({
      active: 'NONE'
    }));
  });

  it('it returns active modal state after explicit open', () => {
    let action = {type: OPEN_MODAL, data: {modal: 'TEST_MODAL'}};
    let stateAfter = modals(undefined, action);
    expect(stateAfter).to.equal(fromJS({
      active: 'TEST_MODAL'
    }));

  });

  it('it returns closed modal state after explicit close', () => {

    let action = {type: OPEN_MODAL, data: {modal: 'TEST_MODAL'}};
    let stateAfter = modals(undefined, action);
    expect(stateAfter).to.equal(fromJS({
      active: 'TEST_MODAL'
    }));

    action = {type: CLOSE_MODAL, data: {modal: 'TEST_MODAL'}};
    stateAfter = modals(undefined, action);
    expect(stateAfter).to.equal(fromJS({
      active: 'NONE'
    }));

  });


  it('it returns new active modal state after open with implicit close', () => {

    let action = {type: OPEN_MODAL, data: {modal: 'TEST_MODALT_A'}};
    let stateAfter = modals(undefined, action);
    expect(stateAfter).to.equal(fromJS({
      active: 'TEST_MODALT_A'
    }));

    action = {type: OPEN_MODAL, data: {modal: 'TEST_MODAL_B'}};
    stateAfter = modals(undefined, action);
    expect(stateAfter).to.equal(fromJS({
      active: 'TEST_MODAL_B'
    }));

  });



});
