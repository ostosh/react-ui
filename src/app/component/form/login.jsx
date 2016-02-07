import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

import validator from '../../util/validator';
import { openModal } from '../../shell/actions';
import { SIGNUP_MODAL } from '../container/modals';

const containerStyle = {
  textAlign: 'center',
  paddingTop: 200,
};

const LoginForm =  React.createClass({

  propTypes : {
    openSingupModal: React.PropTypes.func.isRequired,       
  },

  _handleLogin() {
    console.log('TODO: login with response');
  },
  _handleEmptyAccount(){
    console.log('TODO: empty account');
  } , 
  _handleInvalidAccount(){
    console.log('TODO: invalid account');
  } , 
  _handleInvalidEmail(){
    console.log('TODO: invalid email');
  } , 
  _handleInvalidMobile(){
   console.log('TODO: invalid mobile');
  },
  _handleEmptyPassword(){
    console.log('TODO: empty password');
  } , 

  validateAccount(){
    let input = validator.trim(this.refs.ACCOUNT_FIELD.getValue());
    if(validator.equals(input, '')){
      this._handleEmptyAccount();
      return false;
    }else if(validator.contains(input, '@')){
      if(validator.isEmail(input))
        return true;
      this._handleInvalidEmail();
      return false;
    }else if(validator.matches(input, /[0-9]+/)){
      if(validator.isPhone(input))
        return true;
      this._handleInvalidMobile();
      return false;
    }
    this._handleInvalidAccount();
    return false;

  },

  validatePassword(){
    let input = validator.trim(this.refs.PASSWORD_FIELD.getValue());
    if(validator.isPassword(input))
      return true;
    this._handleEmptyPassword();
    return false;
  },

  validate(){
    return this.validateAccount() && this.validatePassword();
  },

  submit(){
    if(this.validate())
      this._handleLogin();
  },

  render() {
    return (
      <div style={containerStyle}>
        <TextField 
          ref={'ACCOUNT_FIELD'} 
          hintText="Email or Mobile"
          type='text'
        />
        <div></div>
        <TextField 
          ref={'PASSWORD_FIELD'} 
          hintText="Password"
          type='password'
        />
        <div></div>
        <RaisedButton 
          style={{margin:'5px'}} 
          label="Log In" 
          secondary={true} 
          onTouchTap={this.submit} 
        />
        <RaisedButton 
          style={{margin:'5px'}} 
          label="Sign Up" 
          secondary={true} 
          onTouchTap={this.props.openSingupModal} 
        />
      </div>
    );
  },
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openSingupModal: () => {
      dispatch(openModal(SIGNUP_MODAL))
    },
  }
};

export const Login = connect(
  undefined,
  mapDispatchToProps
)(LoginForm);

export default Login;












