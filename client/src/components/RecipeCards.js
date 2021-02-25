import React, { Fragment } from 'react';

class RecipeCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='cardContainer'>
        {
          //Map through the list of recipes
          this.props.recipes.map((element) => {
            return(
              <div
              className='recipeCard'
              key={element.id}
              id={element.id}
              onClick={this.props.onRecipeDetail}
              >
                <ul>
                <li>{element.title}</li>
                <li>{element.preptime}</li>
                <li>{element.servings}</li>
                <li>{element.category}</li>
                <li>{element.source}</li>
                <li>{element.link}</li>
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

export default RecipeCards;
