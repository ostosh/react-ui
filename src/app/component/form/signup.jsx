import React from 'react';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

import validator from '../../util/validator';

export default React.createClass({

  propTypes : {
    handleClose: React.PropTypes.func.isRequired,  
  }, 

  _handleSignup() {
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
  _handleInvalidConfirm(){
    console.log('TODO: invalid confirm');
  } , 
  _handleInvalidPassword(){
    console.log('TODO: invalid password');
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

  validateConfirm(){
    let validation = validator.trim(this.refs.ACCOUNT_FIELD.getValue());
    let input = validator.trim(this.refs.CONFIRM_FIELD.getValue());
    if(validator.equals(validation, input)){
      return true;
    }
    this._handleInvalidConfirm();
    return false;
  },

  validatePassword(){
    let input = validator.trim(this.refs.PASSWORD_FIELD.getValue());
    if(validator.isPassword(input))
      return true;
    this._handleInvalidPassword();
    return false;
  },

  validate(){
    return this.validateAccount() 
      && this.validateConfirm() 
      && this.validatePassword();
  },

  close(){
    this.props.handleClose();
  },

  submit(){
    if(this.validate()){
      this._handleSignup();
      this.close();
    }
  },

  render() {
    return (
      <div>
        <TextField 
          ref={'ACCOUNT_FIELD'} 
          hintText="Email or mobile"
          onChange={this.validateAccount} 
          fullWidth={true}
          type='text'
        />
        <TextField 
          ref={'CONFIRM_FIELD'} 
          hintText="Confirm email or mobile"
          onChange={this.validateConfirm}
          fullWidth={true}
          type='text'
        />
        <TextField 
          ref={'PASSWORD_FIELD'} 
          hintText="Password" 
          onChange={this.validatePassword}
          fullWidth={true} 
          type='password'
        />
        <FlatButton 
           style={{margin:'5px'}} 
           label="Cancel" 
           secondary={true} 
           onTouchTap={this.close} 
        />
        <FlatButton 
          style={{margin:'5px'}} 
          label="Sign Up" 
          secondary={true} 
          onTouchTap={this.submit} 
        />
      </div>
    );
  },
});




