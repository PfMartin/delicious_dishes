import React, { Fragment } from 'react';

class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.log(this.props.currentRecipe);
    console.log(this.props.currentRecipe.title);
  }

  render() {
    return(
        <Fragment>
          {
            this.props.currentRecipe.map((element) => {
              return (
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
              )
            })
          }
        </Fragment>
    )
  }
}

export default RecipeDetail;
