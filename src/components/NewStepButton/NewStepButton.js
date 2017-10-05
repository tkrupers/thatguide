import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

/** Button to add new steps to guide */
class NewStepButton extends React.PureComponent {
  static propTypes = {
    /** Handles click for component */
    handleClick: PropTypes.func.isRequired,
    match: PropTypes.object
  };

  static defaultProps = {
    /** Placeholder method */
    handleClick: () => {}
  }

  render() {
    return (
      <div className="new-step__wrapper">
        <Link className="btn btn-primary" title="Create new step" to="/new-step">
          Add new step
        </Link>
      </div>
    );
  }
}

export default NewStepButton;