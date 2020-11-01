import React, { Fragment } from 'react';

import './App.css'

import CategoryBar from './components/CategoryBar.js';
import RecipeList from './components/RecipeList.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <Fragment>
        <CategoryBar />
        <RecipeList />
      </Fragment>
    )
  }
}

export default App;
