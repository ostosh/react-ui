import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';

import Modal from '../container/modal';
import BroadcastForm from '../form/broadcast';
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

  handleBroadcast() {
    this.refs.broadcastForm.submit();
  },

  render() {
  
    let cancelMessageButton = (
      <FlatButton style={{margin:'5px'}} label="Cancel" secondary={true} onTouchTap={this.toggleModal} />
    );

    let broadcastButton = (
      <FlatButton style={{margin:'5px'}} label="Broadcast" secondary={true} onTouchTap={this.handleBroadcast} />
    );
 
    let broadcastMenu = (
      <ButtonMenu actions={[cancelMessageButton, broadcastButton]} />
    );

    let broadcastForm = (
      <BroadcastForm ref='broadcastForm' />
    );

    return (
      <Modal open={this.props.open} title="Sign Up" content={broadcastForm} actions={broadcastMenu} />
    );
  },
});

