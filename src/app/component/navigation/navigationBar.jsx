import React from 'react';
import { connect } from 'react-redux';
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

import { openModal } from '../../shell/actions';
import { SEARCH_MODAL, BROADCAST_MODAL } from '../container/modals';
import IconMenu from './iconMenu';
import IconButton from './iconButton';

const navStyle = {
  background: 'none',
};

const NavigationBar = ({ openSearchModal, openBroadcastModal }) => {
  let TODO = (
    <MenuItem primaryText="TODO" />
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
          <IconButton onClick={openSearchModal} tooltip="Search" icon={<SearchIcon />} />
          <IconButton onClick={openBroadcastModal} tooltip="Broadcast" icon={<MessageIcon />} />
          <IconMenu tooltip={'TODO'} icon={<AppIcon />} items={[TODO, TODO]} />
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openSearchModal: () => {
      dispatch(openModal(SEARCH_MODAL))
    },
    openBroadcastModal: () => {
      dispatch(openModal(BROADCAST_MODAL))
    },
  };
};

export const NavigationContainer = connect(
  undefined,
  mapDispatchToProps
)(NavigationBar);

export default NavigationContainer;

