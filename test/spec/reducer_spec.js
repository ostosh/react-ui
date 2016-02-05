import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import { TOGGLE_MODAL, REGISTER_MODAL } from '../../src/app/shell/actionTypes';
import { modal } from '../../src/app/shell/reducers';

describe('modal reducer', () => {

  it('it inits state without initial state', () => {
    let stateBefore = Map({});
    let action = {type: REGISTER_MODAL, data: {modal: 'TEST_MODAL'}};
    let stateAfter = modal(stateBefore, action);     
		expect(stateAfter).to.not.be.empty;
	});

  it('it returns a registered modal state', () => {
    let stateBefore = Map({});
    let action = {type: REGISTER_MODAL, data: {modal: 'TEST_MODAL'}};
    let stateAfter = modal(stateBefore, action);
    
    expect(stateAfter).to.equal(fromJS({
      TEST_MODAL: {
        open: false
    }}));

	});

	it('it returns a toggled modal open state', () => {
    let stateBefore = Map({});
    let action = {type: REGISTER_MODAL, data: {modal: 'TEST_MODAL'}};
    let stateAfter = modal(stateBefore, action);
    
    expect(stateAfter).to.equal(fromJS({
      TEST_MODAL: {
        open: false
    }}));
 
    action = {type: TOGGLE_MODAL, data: {modal: 'TEST_MODAL'}};
    stateAfter = modal(stateAfter, action);
    
    expect(stateAfter).to.equal(fromJS({
      TEST_MODAL: {
        open: true
    }}));

	});

	it('it returns a toggled modal close state', () => {
    let stateBefore = Map({});
    let action = {type: REGISTER_MODAL, data: {modal: 'TEST_MODAL'}};
    let stateAfter = modal(stateBefore, action);
    
    expect(stateAfter).to.equal(fromJS({
      TEST_MODAL: {
        open: false
    }}));
    
    action = {type: TOGGLE_MODAL, data: {modal: 'TEST_MODAL'}};
    stateAfter = modal(stateAfter, action);
    
    expect(stateAfter).to.equal(fromJS({
      TEST_MODAL: {
        open: true
    }}));
    
    stateAfter = modal(stateAfter, action);
    
    expect(stateAfter).to.equal(fromJS({
      TEST_MODAL: {
        open: false
    }}));

	});

  it('it returns a unmodified state for unregistered modal', () => {
    let stateBefore = Map({});
    let action = {type: TOGGLE_MODAL, data: {modal: 'TEST_MODAL'}};
    let stateAfter = modal(stateBefore, action);
		expect(stateAfter).to.be.empty;
	});

  it('it returns a unmodified state for null modal', () => {
    let stateBefore = Map({});
    let action = {type: TOGGLE_MODAL, data: {}};
    let stateAfter = modal(stateBefore, action);
		expect(stateAfter).to.be.empty;
	});


});
