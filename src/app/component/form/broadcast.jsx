import React from 'react';
import TextField from 'material-ui/lib/text-field';

export default React.createClass({

  _handleBroadcast() {
    console.log('TODO: broadast with response');
  },

  submit(){
    this._handleBroadcast();
  },

  render() {   
    return (
      <div><div>
        <TextField 
          ref={(ref) => this.account = ref}
          hintText="Broadcast" 
          fullWidth={true}
          type='text'
        />
      </div></div>
    );
  },

});

