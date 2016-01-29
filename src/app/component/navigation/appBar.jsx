import React from 'react';
import AppIcon from 'material-ui/lib/svg-icons/navigation/apps';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';
import MmsIcon from 'material-ui/lib/svg-icons/notification/mms';
import SearchIcon from 'material-ui/lib/svg-icons/action/search';
import LocationOff from 'material-ui/lib/svg-icons/communication/location-off';
import LocationOn from 'material-ui/lib/svg-icons/communication/location-on';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FlatButton from 'material-ui/lib/flat-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import IconMenu from './iconMenu';
import IconButton from './iconButton';

const navStyle = {
  background: 'none',
};

export default React.createClass({
  render() {
    let TODO = (<MenuItem primaryText="TODO" />);
    return (
      <Toolbar style={navStyle} >
        <ToolbarGroup firstChild={true} float="left">
          <FlatButton label="Kin" secondary={true} />   
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <IconButton tooltip="Notifications" icon={<NotificationsIcon />} />
          <IconButton tooltip="Location" icon={<LocationOn />} />
          <ToolbarSeparator />
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <IconButton tooltip="Search" icon={<SearchIcon />} />
          <IconButton tooltip="Broadcast" icon={<MmsIcon />} />
          <IconMenu icon={<AppIcon />} items={[TODO, TODO]} />
        </ToolbarGroup>
      </Toolbar>
    );
  },
});

