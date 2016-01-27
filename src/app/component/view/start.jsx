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
      modalOpen: false,
    };
  },

  toggleSignup(){
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  },    

  handleLogin() {
    this.refs.loginForm.submit();
  },

  handleSignup() {
    this.refs.signupForm.submit();
  },

  render() {

    let submitButton = (
      <FlatButton label="Submit" secondary={true} onTouchTap={this.handleSignup} />
    );
  
    let cancelButton = (
      <FlatButton label="Cancel" secondary={true} onTouchTap={this.toggleSignup} />
    );

    let signupMenu = (
      <ButtonMenu actions={[submitButton, cancelButton]} />
    );
  
    let loginButton = (
      <RaisedButton style={{margin:'5px'}} label="Log In" secondary={true} onTouchTap={this.handleLogin} />
    );
  
    let signupButton = (
      <RaisedButton style={{margin:'5px'}} label="Sign Up" secondary={true} onTouchTap={this.toggleSignup} />
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
        <Modal open={this.state.modalOpen} title="Sign Up" content={signupForm} actions={signupMenu} />
        <Screen content={loginForm} actions={loginMenu} />  
     </div>
    );
  },
});

