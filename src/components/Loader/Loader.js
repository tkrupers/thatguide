import React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired
  }

  render() {
    return this.props.loading
      ? (
        <div className="loader">
          <span className="loader-text">Loading...</span>
        </div>
      )
      : false;
  }
}

export default Loader;