import React, { Fragment } from 'react';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return(
      <Fragment>
        <ul>
          <li>Recipe 1</li>
          <li>Recipe 2</li>
          <li>Recipe 3</li>
          <li>Recipe 4</li>
          <li>Recipe 5</li>
          <li>Recipe 6</li>
        </ul>
      </Fragment>
    )
  }
}

export default RecipeList;
