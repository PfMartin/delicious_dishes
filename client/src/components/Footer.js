import React, { Fragment } from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <Fragment>
        <div className='footer'>
          <p>&copy; Martin Pfatrisch</p>
        </div>
      </Fragment>
    )
  }
}

export default Footer;
