import React, { Fragment } from 'react';

import './App.css'

import CategoryBar from './components/CategoryBar.js';
import Footer from './components/Footer.js';
import RecipeList from './components/RecipeList.js';
import AddRecipe from './components/AddRecipe.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      site: 'AddRecipe',
    };
  }

  render() {

    let site;

    if (this.state.site === 'AddRecipe') {
      site = <AddRecipe />
    } else if (this.state.site === 'RecipeList') {
      site = <RecipeList />
    }

    return(
      <Fragment>
        <CategoryBar />
        {site}
        <Footer />
      </Fragment>
    )
  }
}

export default App;
