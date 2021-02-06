import React, { Fragment } from 'react';

import { FiSearch } from 'react-icons/fi';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = async(e) => {
    await this.setState({
      search: e.target.value
    })
  }

  onSubmitSearch = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return(
      <Fragment>
        <div className='header'>
          <div className='logo'>Image</div>
          <ul className='navBar'>
            <li
              name='addRecipe'
              onClick={this.props.onHandleSite}
              >Add Recipe
            </li>
            <li
              name='showRecipes'
              onClick={this.props.onHandleSite}
              >Show Recipes
            </li>
            <li
              name='editRecipes'
              onClick={this.props.onHandleSite}
              >Edit Recipes
            </li>
          </ul>
          <form >
            <input
              type='text'
              name='search'
              value={this.state.search}
              onChange={this.handleChange}
            />
            <button
              className='btn'
              onClick={this.onSubmitSearch}
            ><FiSearch /></button>
          </form>
        </div>
        <div className="line"></div>
      </Fragment>
    )
  }
}

export default SearchBar;
