import React, { Fragment } from 'react';

const style = require('../style.js');

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return(
      <Fragment>
        <ul style={style.navContainer}>
        Functions
        <li style={style.btnDark}>Add a Recipe</li>
        <li style={style.btnDark}>Show all Recipes</li>
        Categories
        <li style={style.btnLight}>Breakfast</li>
        <li style={style.btnLight}>Mains</li>
        <li style={style.btnLight}>Desserts</li>
        <li style={style.btnLight}>Drinks</li>
        </ul>
      </Fragment>
    )
  }
}

export default NavBar;
