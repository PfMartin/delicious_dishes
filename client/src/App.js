import React, { Fragment } from 'react';

import './App.css'

import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import RecipeList from './components/RecipeList.js';
import AddRecipe from './components/AddRecipe.js';

// const style = require('./style.js')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      site: 'AddRecipe',
      navigation: false,
    };
  }


  handleNav = () => {
    this.setState(prevState => ({
      navigation: !prevState.navigation,
    }));
  }

  navToAddRecipe = () => {
    this.setState(prevState => ({
      site: 'AddRecipe',
      navigation: !prevState.navigation,
    }));

    console.log(this.state);
  }

  navToRecipeList = () => {
    this.setState(prevState => ({
      site: 'RecipeList',
      navigation: !prevState.navigation,
    }))

    console.log(this.state);
  }

  render() {

    return(
      <Fragment>
        {this.state.navigation === true ? <NavBar navToAddRecipe={this.navToAddRecipe} navToRecipeList={this.navToRecipeList}/> : ''}
        <Header handleNav={this.handleNav}/>
        {this.state.site === 'AddRecipe' ? <AddRecipe /> : <RecipeList />}
        <Footer />
      </Fragment>
    )
  }
}

export default App;
