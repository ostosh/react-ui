import React from 'react';
import TextField from 'material-ui/lib/text-field';

import validator from '../../util/validator'

export default React.createClass({
  
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

  isAccountValid(){
    let input = validator.trim(this.account.getValue());
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

  isConfirmValid(){
    let validation = validator.trim(this.account.getValue());
    let input = validator.trim(this.confirm.getValue());
    if(validator.equals(validation, input)){
      return true;
    }
    this._handleInvalidConfirm();
    return false;
  },

  isPasswordValid(){
    let input = validator.trim(this.password.getValue());
    console.log(input);
    if(validator.isPassword(input))
      return true;
    this._handleInvalidPassword();
    return false;
  },

  isValid(){
    return this.isAccountValid() 
            && this.isConfirmValid() 
            && this.isPasswordValid();
  },

  submit(){
    if(this.isValid())
      this._handleSignup();
  },

  render() {   
    return (
      <div><div>
        <TextField 
          ref={(ref) => this.account = ref} 
          hintText="Email or mobile" 
          fullWidth={true}
          type='text'
        />
      </div><div>
        <TextField 
          ref={(ref) => this.confirm = ref} 
          hintText="Confirm email or mobile" 
          fullWidth={true}
          type='text'
        />
      </div><div>
        <TextField 
          ref={(ref) => this.password = ref} 
          hintText="Password" 
          fullWidth={true} 
          type='password'
        />
      </div></div>
    );
  },

});

