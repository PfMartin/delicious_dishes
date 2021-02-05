import React, { Fragment } from 'react';

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

    const line = {
      borderBottom: 'solid #000 1px'
    }

    return(
      <Fragment>
        {
          //Map through the list of recipes
          this.state.allRecipes.map((element) => {
            return(
              <div
                key={element.id}
                style={{margin: '1rem'}}
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
                <div className='line'></div>
              </div>
            )
          })
        }
      </Fragment>
    )
  }
}

export default RecipeList;
