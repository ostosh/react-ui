import React from 'react';


import IconMenu from './iconMenu';


import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/apps';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';
import ShareIcon from 'material-ui/lib/svg-icons/social/share';
import MmsIcon from 'material-ui/lib/svg-icons/notification/mms';
import SearchIcon from 'material-ui/lib/svg-icons/action/search';
import LocationOff from 'material-ui/lib/svg-icons/communication/location-off';
import LocationOn from 'material-ui/lib/svg-icons/communication/location-on';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import FlatButton from 'material-ui/lib/flat-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

const navStyle = {
  background: 'none',
};


export default React.createClass({
  render() {
  

    let geo = (
      <MenuItem primaryText="GEO" />
    );
  

    return (
      <Toolbar style={navStyle} >
        <ToolbarGroup firstChild={true} float="left">
    
        <FlatButton label="Kin" secondary={true} />
            
        </ToolbarGroup>
        


        <ToolbarGroup float="right">
         <IconButton tooltip="Notifications">
            <NotificationsIcon/>
          </IconButton>
          <IconButton tooltip="Location">
            <LocationOn/>
          </IconButton>
          <ToolbarSeparator />
        </ToolbarGroup>

        <ToolbarGroup float="right">
          <IconButton tooltip="Search">
            <SearchIcon />
          </IconButton>
          <IconButton tooltip="Broadcast">
            <MmsIcon />
          </IconButton>
          <IconMenu icon={<NavigationExpandMoreIcon />} items={[geo, geo]} />
      
        </ToolbarGroup>

      </Toolbar>
    );
  },
});

