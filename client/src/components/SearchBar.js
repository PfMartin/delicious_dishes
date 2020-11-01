import React, { Fragment } from 'react';

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
    console.log(this.state);
  }


  render() {
    return(
      <Fragment>
        <form>
          <label htmlFor='search'>Suche</label>
          <input type='text' name='search' onChange={this.handleChange}/>
        </form>
      </Fragment>
    )
  }
}

export default SearchBar;
