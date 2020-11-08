import React, { Fragment } from 'react';

const style = require('../style.js');

class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <Fragment>
        <h1>Add a Recipe </h1>
      </Fragment>
    )
  }
}

export default AddRecipe;
