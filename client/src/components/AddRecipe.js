import React, { Fragment } from 'react';

const style = require('../style.js');

class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      prepTime: '',
      servings: '',
      category: '',
      source: '',
      link: '',
      ingredients: '',
      prepSteps: ''
    };

    // this.server = 'localhost';
    this.server = '192.168.178.26'; //Pi
  }

  setValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addRecipe = async(e) => {
    e.preventDefault();
    try{
      const response = await fetch(`http://${this.server}:5000/addRecipe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
      });

      window.location = '/';
      console.log(response);
      console.log(this.state);
    } catch(err) {
      console.error(err.message);
    }
  }

  render() {
    return(
      <Fragment>
        <div className='container'>
          <div className='formContainer'>
            <form
              onSubmit={this.addRecipe}
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
                  name='prepTime'
                  value={this.state.prepTime}
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
                <textarea
                  cols='20'
                  rows='5'
                  name='ingredients'
                  value={this.state.ingredients}
                  onChange={this.setValue}
                />
              <label>Preparation Steps</label>
                <textarea
                  cols='20'
                  rows='5'
                  type='text'
                  name='prepSteps'
                  value={this.state.prepSteps}
                  onChange={this.setValue}
                />
              <button className='btn'> Add Recipe</button>
            </form>
          </div>
        </div>
        <div className='line'></div>
      </Fragment>
    )
  }
}

export default AddRecipe;
