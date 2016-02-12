import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/lib/dialog';
   
import { openModal, closeModal } from '../../shell/actions';
import BroadcastForm from '../form/broadcast';
import SearchForm from '../form/search';
import SignupForm from '../form/signup';

export const BROADCAST_MODAL = 'BROADCAST_MODAL';
export const SEARCH_MODAL = 'SEARCH_MODAL';
export const SIGNUP_MODAL = 'SIGNUP_MODAL';

const modalStyle = {
  maxWidth: '400px',
};

const titleStyle = {
   padding: '15px 15px 0px 15px', 
   marginBottom: '5px', 
};

const bodyStyle = {
   padding: '0px 0px 0px 0px', 
   marginBottom: '0px', 
};

const Modals = ({ modal, active, handleOpen, handleClose }) => {
  if(active === BROADCAST_MODAL)
    return(
      <Dialog 
       contentStyle={modalStyle} 
       bodyStyle={bodyStyle} 
       titleStyle={titleStyle} 
       open={true} 
       title={"Broadcast"}
      >
        <BroadcastForm handleClose={handleClose} />
      </Dialog>
    );
  else if(active === SEARCH_MODAL)
    return(
      <Dialog
       contentStyle={modalStyle} 
       bodyStyle={bodyStyle} 
       titleStyle={titleStyle} 
       open={true} 
       title={"Search"}
      >
        <SearchForm handleClose={handleClose} />
      </Dialog>
    );
  else if(active === SIGNUP_MODAL)
    return(
      <Dialog        
       contentStyle={modalStyle} 
       bodyStyle={bodyStyle} 
       titleStyle={titleStyle} 
       open={true}  
       title={"Signup"}
      >
        <SignupForm handleClose={handleClose} />
      </Dialog>
    );
  else
    return(<Dialog open={false} />);
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.modals.get('active'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleOpen: (modal) => {
      dispatch(openModal(modal))
    },
    handleClose: (modal) => {
      dispatch(closeModal(modal))
    },
  }
};

export const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modals);

export default ModalContainer;
