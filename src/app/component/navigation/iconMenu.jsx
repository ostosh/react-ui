import React from 'react';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';

export default React.createClass({
  
  propTypes : {
    icon: React.PropTypes.element.isRequired,       
    items: React.PropTypes.node,
    tooltip: React.PropTypes.string,
  }, 

  _getItemObjects(items) {
    const itemObjects = [];
    React.Children.forEach(items, item => {
      if (React.isValidElement(item)) {
        itemObjects.push(item);
      }
    });
    return React.Children.toArray(itemObjects);
  },

  render() {

    let iconButton = (
      <IconButton 
        tooltip={this.props.tooltip} 
        touch={true}>
          {this.props.icon}
      </IconButton>
     );

    let items = this._getItemObjects(this.props.items);

    return (
      <IconMenu iconButtonElement={iconButton}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      >
        {items}
      </IconMenu>
    );
  },
});

