import React, { Fragment } from 'react';

import RecipeDetail from './RecipeDetail.js';
import RecipeCards from './RecipeCards.js';
import RecipeEdit from './RecipeEdit.js';

class ShowRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: [],
      currentRecipe: {},
      site: 'overview',
    };

    // this.server = 'localhost';
    this.server = 'localhost'; // Pi

    this.onRecipeDetail = this.onRecipeDetail.bind(this);
    this.onRecipeList = this.onRecipeList.bind(this);
    this.onRecipeOverviewEdit = this.onRecipeOverviewEdit.bind(this);
    this.onRecipeDetailEdit = this.onRecipeDetailEdit.bind(this);
    this.onDeleteRecipe = this.onDeleteRecipe.bind(this);
    this.onRecipeDetailBack = this.onRecipeDetailBack.bind(this);
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
    const response = await fetch(`http://${this.server}:5000/getRecipes/${recipeId}`)

    const currentRecipe = await response.json();

    this.setState({
      currentRecipe: currentRecipe,
      site: 'detail',
    })
  }

  onRecipeOverviewEdit = async (e) => {
    const recipeId = await e.currentTarget.getAttribute('id');
    const response = await fetch(`http://${this.server}:5000/getRecipes/${recipeId}`)

    const currentRecipe = await response.json();

    this.setState({
      currentRecipe: currentRecipe,
      site: 'edit',
    })
  }

  onDeleteRecipe = async () => {
    try {
      const deleteRecipe = await fetch(`http://${this.server}:5000/deleteRecipe/${this.state.currentRecipe[0].id}`, {
        method: 'DELETE'
      })

      const response = await fetch(`http://${this.server}:5000/getRecipes`);
      const jsonData = await response.json();

      this.setState({
        allRecipes: jsonData,
        site: 'overview'
      })

    } catch(err) {
      console.error(err.message);
    }
  }

  onRecipeDetailEdit = (e) => {
    e.preventDefault();

    this.setState({
      site: 'edit'
    })
  }

  onRecipeList = (e) => {
    this.setState({
      currentRecipe: '',
      site: 'overview',
    })
  }

  onRecipeDetailBack = (e) => {
    this.setState({
      site: 'detail'
    })
  }

  render() {

    return(
      <Fragment>
        <div className='paddingContainer'>
          {
            this.state.site === 'detail' ? <RecipeDetail currentRecipe={this.state.currentRecipe}
            onRecipeList={this.onRecipeList}
            onRecipeDetailEdit={this.onRecipeDetailEdit}
            onDeleteRecipe={this.onDeleteRecipe}/>
            : this.state.site === 'edit' ? <RecipeEdit currentRecipe={this.state.currentRecipe}
            onRecipeList={this.onRecipeList}
            onRecipeDetailBack={this.onRecipeDetailBack}
            onDeleteRecipe={this.onDeleteRecipe}
            />
            : <RecipeCards recipes={this.state.allRecipes} onRecipeDetail={this.onRecipeDetail} onRecipeOverviewEdit={this.onRecipeOverviewEdit}/>
          }
        </div>
      </Fragment>
    )
  }
}

export default ShowRecipes;
