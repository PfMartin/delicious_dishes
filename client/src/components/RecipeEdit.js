import React, { Fragment } from 'react';
import { BiPlus, BiArrowBack, BiTrash } from 'react-icons/bi';

class RecipeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      preptime: '',
      servings: '',
      category: '',
      source: '',
      link: '',
      ingredients: [
        { amount: '', ingredient: '' },
      ],
      prepsteps: [
        { step: ''},
      ],
    }

    // this.server = '192.168.178.26';
    this.server = '192.168.178.26'; //Pi
  }

  componentDidMount = async (e) => {
    await this.setState(this.props.currentRecipe[0]);
  }

  setValue = async (e) => {
    await this.setState({
        [e.target.name]: e.target.value
      })
  }

  setIngredient = async (e, index) => {
    const { name, value } = e.target;

    let list = [...this.state.ingredients];

    list[index][name] = value;

    this.setState({
      ingredients: list,
    })
  }

  onAddIngredient = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      ingredients: [
        ...prevState.ingredients,
        { amount: '', ingredient: '' }
      ]
    }))
  }

  onRemoveIngredient = (e, index) => {
    e.preventDefault();

    let list = [...this.state.ingredients];
    if(list.length > 1) {
      list.splice(index, 1);
      this.setState({
        ingredients: list,
      })
    }
  }

  setStep = (e, index) => {
    const { name, value } = e.target;

    let list = [...this.state.prepsteps];

    list[index][name] = value;

    this.setState({
      prepsteps: list,
    })
  }

  onAddStep = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      prepsteps: [
        ...prevState.prepsteps,
        { step: '' }
      ]
    }))
  }

  onRemoveStep = (e, index) => {
    e.preventDefault();

    let list = [...this.state.prepsteps];
    if(list.length > 1) {
      list.splice(index, 1);
      this.setState({
        prepsteps: list,
      })
    }
  }

  updateRecipe = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://${this.server}:5000/updateRecipe/${this.state.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
      });
      if (response.status === 200) {
        this.props.onRecipeList();
      }

      console.log(this.state);
    } catch(err) {
      console.error(err.message);
    }
  }

  render() {
    return(
      <Fragment>
        <div className='detail'>
          <div className='back'>
            <button
              className='btn'
              onClick={this.props.onRecipeDetailBack}
              ><BiArrowBack />
            </button>
          </div>
          <div className='control'>
            <button
              className='btn'
              onClick={this.props.onDeleteRecipe}
              >
              <BiTrash />
            </button>
          </div>
        </div>
        <h1>Edit Recipe</h1>
          <div className='formContainer'>
            <form
              onSubmit={this.updateRecipe}
              >
              <label>Title</label>
                <input
                  type='text'
                  name='title'
                  value={this.state.title}
                  onChange={this.setValue}
                />
              <label>Preparation Time</label>
                <input
                  type='number'
                  name='preptime'
                  value={this.state.preptime}
                  onChange={this.setValue}
                />
              <label>Servings</label>
                <input
                  type='number'
                  name='servings'
                  value={this.state.servings}
                  onChange={this.setValue}
                />
              <label>Category</label>
                <select
                  name='category'
                  value={this.state.category}
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
                  value={this.state.source}
                  onChange={this.setValue}
                />
              <label>Link</label>
                <input
                  type='text'
                  name='link'
                  value={this.state.link}
                  onChange={this.setValue}
                />
              <label>Ingredients</label>
              <label className='ingredientContainer' id='1'>
                <p>Amount</p><p>Ingredient</p><p>Option</p>
                {
                  this.state.ingredients.map((x, i) => {
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
                            ><BiPlus />
                          </button>
                          <button
                            onClick={e => this.onRemoveIngredient(e, i)}><BiTrash /></button>
                        </div>
                      </Fragment>
                    )
                  })
                }
              </label>
              <label>Preparation Steps</label>
              <label className="stepContainer">
                <p>#</p><p>Step</p><p>Option</p>
                {
                  this.state.prepsteps.map((x, i) => {
                    return (
                      <Fragment key={i}>
                        {i+1}.
                        <input
                          type='text'
                          name='step'
                          value={x.step}
                          onChange={e => this.setStep(e, i)}>
                        </input>
                        <div className='option'>
                          <button
                            onClick={this.onAddStep}
                            ><BiPlus />
                          </button>
                          <button
                            onClick={e => this.onRemoveStep(e, i)}
                          ><BiTrash /></button>
                        </div>
                      </Fragment>
                    )
                  })
                }
              </label>
              <button className='btn'>Update Recipe</button>
            </form>
          </div>
        <div className='line'></div>
      </Fragment>
    )
  }
}

export default RecipeEdit;
