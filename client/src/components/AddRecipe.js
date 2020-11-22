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
        <div style={style.containerStyle}>
          <form style={style.formStyle}>
            <label style={style.labelStyle}>
              Title
              <input type='text' name='title'/>
            </label>
            <label style={style.labelStyle}>
              Preparation Time
              <input type='text' name='prepTime'/>
            </label>
            <label style={style.labelStyle}>
              Servings
              <input type='text' name='servings'/>
            </label>
            <label style={style.labelStyle}>
              Category
              <select name='category'>
                <option value='' disabled selected>Select a Category</option>
                <option value='breakfast'>Breakfast</option>
                <option value='dessert'>Dessert</option>
                <option value='drinks'>Drinks</option>
                <option value='main'>Main</option>
              </select>
            </label>
            <label style={style.labelStyle}>
              Source
              <input type='text' name='source'/>
            </label>
            <label style={style.labelStyle}>
              Link
              <input type='text' name='link'/>
            </label>
            <label style={style.labelStyle}>
              Ingredients
              <input type='text' name='source'/>
            </label>
            <label style={style.labelStyle}>
              Preparation Steps
              <input type='text' name='prepSteps'/>
            </label>
            <button>
              Add Recipe
            </button>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default AddRecipe;
