import React, { Fragment } from 'react';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: [
        {
          title: 'Title',
          preptime: 'PrepTime',
        },
        {
          title: 'Title2',
          preptime: 'preptime2'
        }
      ]
    };

    // this.server = 'localhost';
    this.server = '192.168.178.26'; // Pi
  }

//Fetch recipes from the database when the component is mounted
  componentDidMount = async(e) => {
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
        <div className='cardContainer'>
        {
          //Map through the list of recipes
          this.state.allRecipes.map((element) => {
            return(
              <div
                className='recipeCard'
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
        </div>
      </Fragment>
    )
  }
}

export default RecipeList;
