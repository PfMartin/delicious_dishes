import React, { Fragment } from 'react';

import Header from './components/Header.js';
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

    return(
      <Fragment>
        <Header/>
        {this.state.site === 'AddRecipe' ? <AddRecipe /> : <RecipeList />}
        <Footer />
      </Fragment>
    )
  }
}

export default App;
