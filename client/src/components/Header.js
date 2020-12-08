import React, { Fragment } from 'react';

const style = require('../style.js');

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
        <div style={style.header}>
          <form >
            <label style={{color: '#fff'}}>
              Search&nbsp;
              <input type='text'/>
            </label>

          </form>
          <p style={style.btnDark} onClick={this.props.handleNav}>Navigation</p>
        </div>
      </Fragment>
    )
  }
}

export default SearchBar;
