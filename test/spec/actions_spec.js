import {expect} from 'chai';

import { TOGGLE_MODAL, REGISTER_MODAL } from '../../src/app/shell/actionTypes';
import { toggleModal, registerModal } from '../../src/app/shell/actions';

describe('modal actions', () => {

  it('it returns modal register action', () => {
    let action = registerModal("TEST_MODAL");
    expect(action).to.have.all.keys('type', 'data');
		expect(action.type).to.equal(REGISTER_MODAL);
    expect(action.data).to.have.all.keys('modal');
    expect(action.data.modal).to.equal("TEST_MODAL");
	});

  it('it returns modal toggle action', () => {
    let action = toggleModal("TEST_MODAL");
    expect(action).to.have.all.keys('type', 'data');
		expect(action.type).to.equal(TOGGLE_MODAL);
    expect(action.data).to.have.all.keys('modal');
    expect(action.data.modal).to.equal("TEST_MODAL");
	});


});
