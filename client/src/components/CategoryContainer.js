import React from 'react';

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
      </>
    )
  }
}

export default CategoryContainer;
