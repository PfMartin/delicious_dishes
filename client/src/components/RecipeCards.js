import React, { Fragment } from 'react';
// import { BiPencil } from 'react-icons/bi';

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
                  <h3>{element.title}</h3>
                  <li>{element.category}</li>
                  <li>{element.preptime} min</li>
                  <li>Servings: {element.servings}</li>
                  Source:&nbsp;
                  <a href={element.link}> {element.source}</a>
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
