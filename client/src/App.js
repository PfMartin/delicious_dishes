import React, { Fragment } from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ShowRecipes from './components/ShowRecipes.js';
import AddRecipe from './components/AddRecipe.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      site: 'overview',
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
        <Header onHandleSite={this.onHandleSite} site={this.state.site}/>
        {this.state.site === 'addRecipe' ? <AddRecipe /> : <ShowRecipes />}
        <Footer />
      </Fragment>
    )
  }
}

export default App;
