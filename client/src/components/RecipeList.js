import React, { Fragment } from 'react';

const style = require('../style.js');

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
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
        recipes: data
      })

      console.log(this.state);

    } catch(err) {
      console.error(err.message);
    }
  }

  render() {
    //Map through the list of recipes
    return(
      <Fragment>
        <div style={style.recipeList}>
          {this.state.recipes.map((item) => {
            return(
              <div style={style.listItem}>
                <h3>{item.title}</h3>
                <p>{item.category}</p>
                <p>Time: {item.preptime}</p>
              </div>
            )
          })}
        </div>
      </Fragment>
    )
  }
}

export default RecipeList;
