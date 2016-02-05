import { TOGGLE_MODAL, REGISTER_MODAL } from './actionTypes'

export const toggleModal = (modal) => {
  return {
    type: TOGGLE_MODAL,
    data: {modal: modal},
  }
};

export const registerModal = (modal) => {
  return {
    type: REGISTER_MODAL,
    data: {modal: modal},
  }
};


