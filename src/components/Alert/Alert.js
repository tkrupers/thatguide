import React from 'react';
import PropTypes from 'prop-types';

class Alert extends React.Component {
  render() {
    const {message, status, show} = this.props.alert;
    return (
      <div>
        {show && <div className={`alert alert-${status} alert-dismissible fade show`} role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          {message}
        </div>}
      </div>
    );
  }
}

export default Alert;