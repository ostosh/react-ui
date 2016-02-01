import React from 'react';

import MenuItem from 'material-ui/lib/menus/menu-item';
import FlatButton from 'material-ui/lib/flat-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';

import AppIcon from 'material-ui/lib/svg-icons/navigation/apps';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';
import MessageIcon from 'material-ui/lib/svg-icons/notification/mms';
import SearchIcon from 'material-ui/lib/svg-icons/action/search';
import LocationOffIcon from 'material-ui/lib/svg-icons/communication/location-off';
import LocationOnIcon from 'material-ui/lib/svg-icons/communication/location-on';


import IconMenu from './iconMenu';
import IconButton from './iconButton';
import ButtonMenu from './buttonContainer';
import Modal from '../container/modal';
import SearchForm from '../form/search';
import BroadcastForm from '../form/broadcast';

const navStyle = {
  background: 'none',
};

export default React.createClass({

  getInitialState() {
    return {
      searchOpen: false,
      messageOpen: false,
    };
  },  

  toggleSearchPopOver(){
    this.setState({
      searchOpen: !this.state.searchOpen,
    });
  },    

  toggleMessagePopOver(){
    this.setState({
      messageOpen: !this.state.messageOpen,
    });
  },    
  
  handleSearch() {
    this.refs.searchForm.submit();
  },

  handleBroadcast() {
    this.refs.broadcastForm.submit();
  },

  render() {

    let TODO = (
      <MenuItem primaryText="TODO" />
    );
    
    let searchForm = (
      <SearchForm ref='searchForm' />
    );
  
    let cancelSearchButton = (
      <FlatButton style={{margin:'5px'}} label="Cancel" secondary={true} onTouchTap={this.toggleSearchPopOver} />
    );

    let searchButton = (
      <FlatButton style={{margin:'5px'}} label="Search" secondary={true} onTouchTap={this.handleSearch} />
    );

    let searchMenu = (
      <ButtonMenu actions={[cancelSearchButton, searchButton]} />
    );

    let broadcastForm = (
      <BroadcastForm ref='broadcastForm' />
    );

    let cancelMessageButton = (
      <FlatButton style={{margin:'5px'}} label="Cancel" secondary={true} onTouchTap={this.toggleMessagePopOver} />
    );

    let broadcastButton = (
      <FlatButton style={{margin:'5px'}} label="Broadcast" secondary={true} onTouchTap={this.handleBroadcast} />
    );
 
    let messageMenu = (
      <ButtonMenu actions={[cancelMessageButton, broadcastButton]} />
    );


    return (
      <div>
      <Toolbar style={navStyle} >
        <ToolbarGroup firstChild={true} float="left">
          <FlatButton label="Kin" secondary={true} />   
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <IconButton tooltip="Notifications" icon={<NotificationsIcon />} />
          <IconButton tooltip="Location" icon={<LocationOnIcon />} />
          <ToolbarSeparator />
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <IconButton onClick={this.toggleSearchPopOver} tooltip="Search" icon={<SearchIcon />} />
          <IconButton onClick={this.toggleMessagePopOver} tooltip="Broadcast" icon={<MessageIcon />} />
          <IconMenu tooltip={'TODO'} icon={<AppIcon />} items={[TODO, TODO]} />
        </ToolbarGroup>
      </Toolbar>
      <Modal open={this.state.searchOpen} title="Search" content={searchForm} actions={searchMenu} />
      <Modal open={this.state.messageOpen} title="Broadcast" content={broadcastForm} actions={messageMenu} />
     </div>
    );
  },
});

