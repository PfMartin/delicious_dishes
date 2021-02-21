import React, { Fragment } from 'react';

import RecipeDetail from './RecipeDetail.js';
import RecipeCards from './RecipeCards.js';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: [],
      currentRecipe: {},
      detail: false,
    };

    this.server = 'localhost';
    // this.server = '192.168.178.26'; // Pi

    this.onRecipeDetail = this.onRecipeDetail.bind(this);
  }

//Fetch recipes from the database when the component is mounted
  componentDidMount = async(e) => {
    try {
      const response = await fetch(`http://${this.server}:5000/getRecipes`);

      const jsonData = await response.json();

      await this.setState({
        allRecipes: jsonData
      })

    } catch(err) {
      console.error(err);
    }
  }

  onRecipeDetail = async (e) => {
    const recipeId = await e.currentTarget.getAttribute('id');
    const currentRecipe = await this.state.allRecipes.filter(element => element.id === parseInt(recipeId));


    this.setState({
      currentRecipe: currentRecipe,
      detail: true,
    })
  }

  render() {

    return(
      <Fragment>
        {
          this.state.detail === true ? <RecipeDetail currentRecipe={this.state.currentRecipe}/>
          : <RecipeCards recipes={this.state.allRecipes} onRecipeDetail={this.onRecipeDetail}/>
        }
      </Fragment>
    )
  }
}

export default RecipeList;
