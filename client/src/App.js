import React, { Fragment } from 'react';

import './App.css'

import CategoryBar from './components/CategoryBar.js';
import Footer from './components/Footer.js';
import RecipeList from './components/RecipeList.js';
import AddRecipe from './components/AddRecipe.js';

const style = require('./style.js')

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
      <div style={style.backgroundStyle}>
          <CategoryBar />
          {site}
          <Footer />
        </div>
      </Fragment>
    )
  }
}

export default App;
