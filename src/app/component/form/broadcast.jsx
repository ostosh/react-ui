import React from 'react';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

export default React.createClass({

  propTypes : {
    handleClose: React.PropTypes.func.isRequired,  
  }, 

  close(){
    this.props.handleClose();
  },

  submit(){
    console.log('TODO: broadast with response');
    this.close();
  },

  render() {
    return (
      <div>
        <div style={{padding: '0px 15px 0px 17px'}}>
          <TextField
            ref={'BROADCAST_FIELD'}
            hintText="Broadcast" 
            fullWidth={true}
            type='text'
          />
        </div>
        <div style={{textAlign:'right'}}>
          <FlatButton 
            style={{margin:'5px'}} 
            label="Cancel" 
            secondary={true} 
            onTouchTap={this.close} 
          />
          <FlatButton 
            style={{margin:'5px'}} 
            label="Broadcast" 
            secondary={true} 
            onTouchTap={this.submit} 
          />
        </div>
      </div>
    );
  },
});



