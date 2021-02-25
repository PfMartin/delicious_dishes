import React, { Fragment } from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import EditRecipes from './components/EditRecipes.js'
import ShowRecipes from './components/ShowRecipes.js';
import AddRecipe from './components/AddRecipe.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      site: 'addRecipe',
    };

    this.onHandleSite = this.onHandleSite.bind(this);
  }

  onHandleSite = (e) => {
    e.preventDefault();
    this.setState({
      site: e.target.getAttribute('name'),
    })
  }

  render() {

    return(
      <Fragment>
        <Header onHandleSite={this.onHandleSite}/>
        {this.state.site === 'addRecipe' ? <AddRecipe />
        : this.state.site === 'showRecipes' ? <ShowRecipes />
        : <EditRecipes />}
        <Footer />
      </Fragment>
    )
  }
}

export default App;
