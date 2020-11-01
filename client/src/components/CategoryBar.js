import React, { Fragment } from 'react';

import SearchBar from './SearchBar.js';

class CategoryBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const navStyle = {
      display: 'flex',
      background: '#2E1114',
      color: '#ADADAD',
      alignItems: 'center',
      justifyContent: 'space-between'

    }

    return(
      <Fragment>
        <div style={navStyle}>
          <h1>Category Bar</h1>
          <SearchBar />
        </div>
      </Fragment>
    )
  }
}

export default CategoryBar;
