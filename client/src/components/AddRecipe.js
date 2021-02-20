import React, { Fragment } from 'react';

class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        title: '',
        prepTime: '',
        servings: '',
        category: '',
        source: '',
        link: '',
        ingredients: [],
        prepSteps: [],
      },
      ingredientParts: [
        { amount: '', ingredient: '' },
      ],
      steps: [
        { step: ''},
      ],
    }

    // this.server = 'localhost';
    this.server = '192.168.178.26'; //Pi
  }

  setValue = async (e) => {
    await this.setState((prevState) => ({
      recipe: {
        ...prevState.recipe,
        [e.target.name]: e.target.value
      }
    }))
  }

  setIngredient = async (e, index) => {
    const { name, value } = e.target;

    let list = [...this.state.ingredientParts];

    list[index][name] = value;

    this.setState({
      ingredientParts: list,
    })

    // this.setState((prevState) => ({
    //   ingredientParts: {
    //     ...prevState.ingredientParts,
    //     [e.target.name]: e.target.value
    //     }
    //   }))
  }

  onAddIngredient = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      ingredientParts: [
        ...prevState.ingredientParts,
        { amount: '', ingredient: '' }
      ]
    }))
  }

  onRemoveIngredient = (e, index) => {
    e.preventDefault();

    let list = [...this.state.ingredientParts];
    if(list.length > 1) {
      list.splice(index, 1);
      this.setState({
        ingredientParts: list,
      })
    }
  }

  setStep = async (e, index) => {
    const { name, value } = e.target;

    let list = [...this.state.steps];

    list[index][name] = value;

    await this.setState({
      step: list,
    })

    console.log(this.state.steps)
  }

  onAddStep = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      steps: [
        ...prevState.steps,
        { step: '' }
      ]
    }))
  }

  onRemoveStep = (e, index) => {
    e.preventDefault();

    let list = [...this.state.steps];
    if(list.length > 1) {
      list.splice(index, 1);
      this.setState({
        steps: list,
      })
    }
  }

  addRecipe = async(e) => {
    e.preventDefault();
    try{
    //   const response = await fetch(`http://${this.server}:5000/addRecipe`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(this.state)
    //   });
    //
    //   window.location = '/';
    //   console.log(response);
      console.log(this.state);
    } catch(err) {
      console.error(err.message);
    }
  }

  render() {
    return(
      <Fragment>
          <div className='formContainer'>
            <form
              onSubmit={this.addRecipe}
              >
              <label>Title</label>
                <input
                  type='text'
                  name='title'
                  value={this.state.recipe.title}
                  onChange={this.setValue}
                />
              <label>Preparation Time</label>
                <input
                  type='number'
                  name='prepTime'
                  value={this.state.recipe.prepTime}
                  onChange={this.setValue}
                />
              <label>Servings</label>
                <input
                  type='number'
                  name='servings'
                  value={this.state.recipe.servings}
                  onChange={this.setValue}
                />
              <label>Category</label>
                <select
                  name='category'
                  value={this.state.recipe.category}
                  onChange={this.setValue}
                >
                  <option value='' disabled selected>Select a Category</option>
                  <option value='basics'>Basics</option>
                  <option value='breakfast'>Breakfast</option>
                  <option value='dessert'>Dessert</option>
                  <option value='drinks'>Drinks</option>
                  <option value='main'>Main</option>
                </select>
              <label>Source</label>
                <input
                  type='text'
                  name='source'
                  value={this.state.recipe.source}
                  onChange={this.setValue}
                />
              <label>Link</label>
                <input
                  type='text'
                  name='link'
                  value={this.state.recipe.link}
                  onChange={this.setValue}
                />
              <label>Ingredients</label>
              <label className='ingredientContainer' id='1'>
                <p>Amount</p><p>Ingredient</p><p>Option</p>
                {
                  this.state.ingredientParts.map((x, i) => {
                    return (
                      <Fragment key={i}>
                        <input
                          className='amount'
                          name='amount'
                          value={x.amount}
                          onChange={e => this.setIngredient(e, i)}
                        />
                        <input
                          className='description'
                          name='ingredient'
                          value={x.ingredient}
                          onChange={e => this.setIngredient(e, i)}
                        />
                        <div className='option'>
                          <button
                            onClick={this.onAddIngredient}
                            >+
                          </button>
                          <button
                            onClick={e => this.onRemoveIngredient(e, i)}>-</button>
                        </div>
                      </Fragment>
                    )
                  })
                }
              </label>
              <label>Preparation Steps</label>
              <label className="stepContainer">
                <p>Step</p><p>Option</p>
                {
                  this.state.steps.map((x, i) => {
                    return (
                      <Fragment key={i}>
                        <input
                          type='text'
                          name='step'
                          value={x.step}
                          onChange={e => this.setStep(e, i)}>
                        </input>
                        <div className='option'>
                          <button
                            onClick={this.onAddStep}
                          >+
                          </button>
                          <button
                            onClick={e => this.onRemoveStep(e, i)}
                          >-</button>
                        </div>
                      </Fragment>
                    )
                  })
                }
              </label>
              <button className='btn'> Add Recipe</button>
            </form>
          </div>
        <div className='line'></div>
      </Fragment>
    )
  }
}

export default AddRecipe;
