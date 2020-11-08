import React, { Fragment } from 'react';
const style = require('../style.js');


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <Fragment>
        <div style={style.footer}>
          <p>&copy; Martin Pfatrisch</p>
        </div>
      </Fragment>
    )
  }
}

export default Footer;
