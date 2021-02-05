import React, { Fragment } from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return(
      <Fragment>
        <ul className='navBar'>
          <li>Add Recipe</li>
          <li>Display Recipes</li>
          <li>Edit Recipe</li>
        </ul>
      </Fragment>
    )
  }
}

export default NavBar;
