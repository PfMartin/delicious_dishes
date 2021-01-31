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
  onGetRecipes = async(e) => {
    try {
      const response = await fetch(`http://${this.server}:5000/getRecipes`);

      const jsonData = await response.json();

      this.setState({
        allRecipes: jsonData
      })

      console.log(this.state.allRecipes);

    } catch(err) {
      console.error(err);
    }
  }

  render() {
    return(
      <Fragment>
        <button onClick={this.onGetRecipes}>Get Recipes</button>
        {
          //Map through the list of recipes
          this.state.allRecipes.map((element) => {
            return(
              <div
                key={element.id}
                >
                <ul>
                  <li>{element.title}</li>
                  <li>{element.preptime}</li>
                  <li>{element.servings}</li>
                  <li>{element.category}</li>
                  <li>{element.source}</li>
                  <li>{element.link}</li>
                  <li>{element.ingredients}</li>
                  <li>{element.prepsteps}</li>
                </ul>
              </div>
            )
          })
        }
      </Fragment>
    )
  }
}

export default RecipeList;
