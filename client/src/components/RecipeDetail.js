import React, { Fragment } from 'react';

class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingredients: [],
      prepsteps: [],
    };
  }

  componentDidMount = async () => {
    await this.setState(this.props.currentRecipe[0])
    console.log(this.props.currentRecipe[0]);
  }

  render() {
    return(
        <Fragment>
          <header className='detail'>
            <button
              className='btn'
              onClick={this.props.onRecipeList}
              >Back
            </button>
          </header>
          <h1>{this.state.title}</h1>
          <ul className='meta'>
            <li>Preparation Time: {this.state.preptime}</li>
            <li>Serving: {this.state.servings}</li>
            <li>Category: {this.state.category}</li>
            <li>Source:&nbsp;
              <a href={this.state.link}>{this.state.source}</a>
            </li>
          </ul>
          <ol>
            {
              this.state.ingredients.map((element) => {
                return (
                  <li>{element}</li>
                )
              })
            }
          </ol>
          <ol>
            {
              this.state.prepsteps.map((element) => {
                return (
                  <li>{element}</li>
                )
              })
            }
          </ol>
        </Fragment>
    )
  }
}

export default RecipeDetail;
