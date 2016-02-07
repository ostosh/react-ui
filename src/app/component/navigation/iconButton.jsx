import React from 'react';
import IconButton from 'material-ui/lib/icon-button';

export default React.createClass({
  propTypes : {
    onClick: React.PropTypes.func,
    icon: React.PropTypes.element.isRequired,
    tooltip: React.PropTypes.string,
  }, 

  render() {
    return (
      <IconButton 
        onClick={this.props.onClick} 
        touch={true} 
        tooltip={this.props.tooltip}>
        {this.props.icon}
      </IconButton>
    );
  },
});

