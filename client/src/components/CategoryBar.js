import React, { Fragment } from 'react';
import SearchBar from './SearchBar.js';

const style = require('../style.js');

class CategoryBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return(
      <Fragment>
        <div style={style.categoryBar}>
          <h1>Category Bar</h1>
          <SearchBar />
        </div>
      </Fragment>
    )
  }
}

export default CategoryBar;
