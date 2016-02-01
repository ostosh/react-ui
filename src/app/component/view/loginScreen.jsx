import React from 'react';

import TextField from 'material-ui/lib/text-field';

import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

import Screen from '../container/screen';
import Modal from '../container/modal';

import Login from '../form/login';
import SignUp from '../form/signup';

import ButtonMenu from '../navigation/buttonContainer';

export default React.createClass({

  getInitialState() {
    return {
      signupOpen: false,
    };
  },

  toggleSignupModal(){
    this.setState({
      signupOpen: !this.state.signupOpen,
    });
  },    

  handleLogin() {
    this.refs.loginForm.submit();
  },

  handleSignup() {
    this.refs.signupForm.submit();
  },

  render() {
  
    let cancelButton = (
      <FlatButton label="Cancel" secondary={true} onTouchTap={this.toggleSignupModal} />
    );

    let submitButton = (
      <FlatButton label="Submit" secondary={true} onTouchTap={this.handleSignup} />
    );

    let signupMenu = (
      <ButtonMenu actions={[cancelButton, submitButton]} />
    );
  
    let loginButton = (
      <RaisedButton style={{margin:'5px'}} label="Log In" secondary={true} onTouchTap={this.handleLogin} />
    );
  
    let signupButton = (
      <RaisedButton style={{margin:'5px'}} label="Sign Up" secondary={true} onTouchTap={this.toggleSignupModal} />
    );
  
    let loginMenu = (
      <ButtonMenu actions={[loginButton, signupButton]} />
    );

    let loginForm = (
      <Login ref='loginForm' />
    );

    let signupForm = (
      <SignUp ref='signupForm' />
    );

    return (
     <div>
        <Modal open={this.state.signupOpen} title="Sign Up" content={signupForm} actions={signupMenu} />
        <Screen content={loginForm} actions={loginMenu} />  
     </div>
    );
  },
});

