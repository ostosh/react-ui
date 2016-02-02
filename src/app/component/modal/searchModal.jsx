import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';

import Modal from '../container/modal';
import SearchForm from '../form/search';
import ButtonMenu from '../navigation/buttonContainer';

export default React.createClass({

  getInitialState() {
    return {
      open: false,
    };
  },

  toggleModal(){
    this.setState({
      open: !this.state.open,
    });
  },    

  handleSearch() {
    this.refs.searchForm.submit();
  },

  render() {

    let cancelSearchButton = (
      <FlatButton style={{margin:'5px'}} label="Cancel" secondary={true} onTouchTap={this.toggleModal} />
    );

    let searchButton = (
      <FlatButton style={{margin:'5px'}} label="Search" secondary={true} onTouchTap={this.handleSearch} />
    );

    let searchMenu = (
      <ButtonMenu actions={[cancelSearchButton, searchButton]} />
    );
   
    let searchForm = (
      <SearchForm ref='searchForm' />
    );

    return (
      <Modal open={this.state.open} title="Sign Up" content={searchForm} actions={searchMenu} />
    );
  },
});

