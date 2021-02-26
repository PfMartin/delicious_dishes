import React, { Fragment } from 'react';

import RecipeDetail from './RecipeDetail.js';
import RecipeCards from './RecipeCards.js';

class ShowRecipes extends React.Component {
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
    this.onRecipeList = this.onRecipeList.bind(this);
  }

//Fetch recipes from the database when the component is mounted
  componentDidMount = async(e) => {
    try {
      const response = await fetch(`http://${this.server}:5000/getRecipes`);

      const jsonData = await response.json();

      await this.setState({
        allRecipes: jsonData
      })

      console.log(this.state);

    } catch(err) {
      console.error(err);
    }
  }

  onRecipeDetail = async (e) => {
    const recipeId = await e.currentTarget.getAttribute('id');
    const response = await fetch(`http://${this.server}:5000/getRecipes/${recipeId}`)

    const currentRecipe = await response.json();

    this.setState({
      currentRecipe: currentRecipe,
      detail: true,
    })
  }

  onRecipeList = async (e) => {
    this.setState({
      currentRecipe: '',
      detail: false,
    })
  }

  render() {

    return(
      <Fragment>
        <div className='paddingContainer'>
          {
            this.state.detail === true ? <RecipeDetail currentRecipe={this.state.currentRecipe}
            onRecipeList={this.onRecipeList}/>
            : <RecipeCards recipes={this.state.allRecipes} onRecipeDetail={this.onRecipeDetail}/>
          }
        </div>
      </Fragment>
    )
  }
}

export default ShowRecipes;
