import React, { Fragment } from 'react';

const style = require('../style.js');

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: []
    };

    // this.server = 'localhost';
    this.server = '192.168.178.26'; // Pi
  }

//Fetch recipes from the database when the component is mounted
  componentDidMount = async(e) => {
    try {
      const response = await fetch(`http://${this.server}:5000/getRecipes`, {
        method: 'GET',
        header: { 'Content-Type': 'application/json' }
      });

      const data = await response.json();

      this.setState({
        allRecipes: data
      })

      console.log(this.state.allRecipes);

    } catch(err) {
      console.error(err.message);
    }
  }

  render() {
    //Map through the list of recipes
    return(
      <Fragment>
        <h1>Hello</h1>
      </Fragment>
    )
  }
}

export default RecipeList;
