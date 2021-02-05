import React, { Fragment } from 'react';

import NavBar from './NavBar.js';

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
          <div>Image</div>
          <NavBar />
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
            >Submit</button>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default SearchBar;
