import React, { Fragment } from 'react';
import { BiPencil, BiArrowBack, BiTrash } from 'react-icons/bi';

class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingredients: [],
      prepsteps: [],
    };
    // this.server = '192.168.178.26';
    this.server = '192.168.178.26';
  }

  componentDidMount = async () => {
    await this.setState(this.props.currentRecipe[0])

    console.log(this.state.id);
  }


  render() {
    return(
        <Fragment>
          <div className='detail'>
            <div className='back'>
              <button
                className='btn'
                onClick={this.props.onRecipeList}
                ><BiArrowBack />
              </button>
            </div>
            <div className='control'>
              <button
                className='btn'
                onClick={this.props.onRecipeDetailEdit}
                >
                <BiPencil />
              </button>
              <button
                className='btn'
                onClick={this.props.onDeleteRecipe}
                >
                <BiTrash />
              </button>
            </div>
          </div>
          <body className='bodyDetail'>
            <ul className='meta'>
              <h1>{this.state.title}</h1>
                <li>Preparation Time: {this.state.preptime}</li>
                <li>Serving: {this.state.servings}</li>
                <li>Category: {this.state.category}</li>
                <li>Source:&nbsp;
                  <a href={this.state.link}>{this.state.source}</a>
                </li>
            </ul>
            <ul className='ingredients'>
              <h3>Ingredients</h3>
              {
                this.state.ingredients.map((element) => {
                  return (
                    <li key={element.id}>{element.amount} {element.ingredient}</li>
                  )
                })
              }
            </ul>
            <ol className='prepSteps'>
              <h3>Preparation Steps</h3>
              {
                this.state.prepsteps.map((element) => {
                  return (
                    <li key={element.id}>{element.step}</li>
                  )
                })
              }
            </ol>
          </body>
        </Fragment>
    )
  }
}

export default RecipeDetail;
