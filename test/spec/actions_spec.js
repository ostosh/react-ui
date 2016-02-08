import {expect} from 'chai';

import { OPEN_MODAL, CLOSE_MODAL } from '../../src/app/shell/actionTypes';
import { openModal, closeModal } from '../../src/app/shell/actions';

describe('modal actions', () => {

  it('it returns modal register action', () => {
    let action = openModal("TEST_MODAL");
    expect(action).to.have.all.keys('type', 'data');
    expect(action.type).to.equal(OPEN_MODAL);
    expect(action.data).to.have.all.keys('modal');
    expect(action.data.modal).to.equal("TEST_MODAL");
  });

  it('it returns modal toggle action', () => {
    let action = closeModal("TEST_MODAL");
    expect(action).to.have.all.keys('type', 'data');
    expect(action.type).to.equal(CLOSE_MODAL);
    expect(action.data).to.have.all.keys('modal');
    expect(action.data.modal).to.equal("TEST_MODAL");
  });


});
