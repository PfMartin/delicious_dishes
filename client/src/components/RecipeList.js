import React, { Fragment } from 'react';

const style = require('../style.js');

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return(
      <Fragment>
        <div style={style.recipeList}>
          <div style={style.listItem}>
            <h3>Recipe 1</h3>
            <p>Category</p>
            <p>Short Description</p>
          </div>
          <div style={style.listItem}>
            <h3>Recipe 2</h3>
            <p>Category</p>
            <p>Short Description</p>
          </div>
          <div style={style.listItem}>
            <h3>Recipe 3</h3>
            <p>Category</p>
            <p>Short Description</p>
          </div>
          <div style={style.listItem}>
            <h3>Recipe 4</h3>
            <p>Category</p>
            <p>Short Description</p>
          </div>
          <div style={style.listItem}>
            <h3>Recipe 5</h3>
            <p>Category</p>
            <p>Short Description</p>
          </div>
          <div style={style.listItem}>
            <h3>Recipe 6</h3>
            <p>Category</p>
            <p>Short Description</p>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default RecipeList;
