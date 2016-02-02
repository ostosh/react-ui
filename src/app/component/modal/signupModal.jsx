import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';

import Modal from '../container/modal';
import SignUpForm from '../form/signup';
import ButtonMenu from '../navigation/buttonContainer';

export default React.createClass({

  getInitialState() {
    return {
      open: false,
    };
  },

  toggleModal(){
    this.setState({
      open: !this.state.open,
    });
  },    

  handleSignup() {
    this.refs.signupForm.submit();
  },

  render() {
  
    let cancelButton = (
      <FlatButton label="Cancel" secondary={true} onTouchTap={this.toggleModal} />
    );

    let submitButton = (
      <FlatButton label="Submit" secondary={true} onTouchTap={this.handleSignup} />
    );

    let signupMenu = (
      <ButtonMenu actions={[cancelButton, submitButton]} />
    );

    let signupForm = (
      <SignUpForm ref='signupForm' />
    );

    return (
      <Modal open={this.state.open} title="Sign Up" content={signupForm} actions={signupMenu} />
    );
  },
});

