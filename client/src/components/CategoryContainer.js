import React from 'react';
import { BiTimeFive, BiUser } from 'react-icons/bi';


class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <>
        <div className='cardContainer'>
        {
          this.props.recipes.filter(element => element.category === this.props.category).map((element) => {
            return (
              <div
                className='recipeCard'
                key={element.id}
                id={element.id}
                onClick={this.props.onRecipeDetail}
                >
                <ul>
                  <h3>{element.title}</h3>
                  <li>{element.category}</li>
                  <li><BiTimeFive /> {element.preptime} min</li>
                  <li><BiUser /> {element.servings}</li>
                  <li>by {element.source}</li>
                </ul>
              </div>
            )
          })
        }
        </div>
      </>
    )
  }
}

export default CategoryContainer;
