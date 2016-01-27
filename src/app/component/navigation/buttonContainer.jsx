import React from 'react';

const menuStyle = {
  paddingTop: 10,
};


export default React.createClass({
  propTypes : {
    actions: React.PropTypes.node,
  }, 

  _getActionObjects(actions) {
    const actionObjects = [];
    React.Children.forEach(actions, action => {
      if (React.isValidElement(action)) {
        actionObjects.push(action);
      }
    });
    return React.Children.toArray(actionObjects);
  },

  render() {
    let actions = this._getActionObjects(this.props.actions);
    return (
        <div style={menuStyle}>
          {actions}
        </div>
    );
  },
});

