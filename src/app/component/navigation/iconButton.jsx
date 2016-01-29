import React from 'react';
import IconButton from 'material-ui/lib/icon-button';

export default React.createClass({
  propTypes : {
    icon: React.PropTypes.element.isRequired,
    tooltip: React.PropTypes.string,
  }, 

  render() {
    return (
      <IconButton tooltip={this.props.tooltip}>
        {this.props.icon}
      </IconButton>
    );
  },
});

