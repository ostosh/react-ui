import React from 'react';
import TextField from 'material-ui/lib/text-field';

export default React.createClass({
  
  _handleSearch() {
    console.log('TODO: search with response');
  },
  _handlePreSearch(){
    console.log('TODO: presearch with response');
  } , 

  submit(){
    this._handleSearch();
  },

  render() {   
    return (
      <div><div>
        <TextField 
          ref={(ref) => this.account = ref}
          onChange={this._handleSearch}
          hintText="Search Kin" 
          fullWidth={true}
          type='text'
        />
      </div></div>
    );
  },

});

