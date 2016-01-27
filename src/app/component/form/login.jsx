import React from 'react';

import TextField from 'material-ui/lib/text-field';

import validator from '../../util/validator'

export default React.createClass({
 
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
  isPasswordValid(){
    let input = validator.trim(this.password.getValue());
    if(!validator.equals(input, ''))
      return true;
    this._handleEmptyPassword();
    return false;
  },

  isValid(){
    return this.isAccountValid() && this.isPasswordValid();
  },

  submit(){
    if(this.isValid())
      this._handleLogin();
  },

  render() {
    return (
      <div><div>
        <TextField 
          ref={(ref) => this.account = ref} 
          hintText="Email or Mobile"
          type='text'
        />
      </div><div>
        <TextField 
          ref={(ref) => this.password = ref} 
          hintText="Password"
          type='password'
        />
      </div></div>
    );
  },
});

