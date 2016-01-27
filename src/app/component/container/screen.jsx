import React from 'react';

const containerStyle = {
  textAlign: 'center',
  paddingTop: 200,
};

export default React.createClass({
  propTypes : {
    content: React.PropTypes.element.isRequired,       
    actions: React.PropTypes.element.isRequired,
  },

  render() {
    return (
      <div style={containerStyle}>
        <div>{this.props.content}</div>
        <div>{this.props.actions}</div>
      </div>
    );
  },
});

