import React from 'react';
import Dialog from 'material-ui/lib/dialog';

const customContentStyle = {
  maxWidth: '400px',
};

export default React.createClass({

  propTypes : {
    open: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.element.isRequired,       
    actions: React.PropTypes.element,
  }, 

  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.open !== nextProps.open;
  },

 render() {
    return (
      <Dialog 
       contentStyle={customContentStyle}
       actions={this.props.actions} 
       open={this.props.open} 
       title={this.props.title}>
        <div>{this.props.content}</div>
      </Dialog>
    );
  },
});

