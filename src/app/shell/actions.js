import { OPEN_MODAL, CLOSE_MODAL } from './actionTypes';

export const openModal = (modal) => {
  return {
    type: OPEN_MODAL,
    data: {modal: modal},
  }
};

export const closeModal = (modal) => {
  return {
    type: CLOSE_MODAL,
    data: {modal: modal},
  }
};


