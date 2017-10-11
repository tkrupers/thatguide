import React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.PureComponent {
  static propTypes = {
    fetching: PropTypes.bool.isRequired,
    saving: PropTypes.bool.isRequired    
  }

  render() {
    return this.props.fetching || this.props.saving
      ? (
        <div className="loader"></div>
      )
      : false;
  }
}

export default Loader;