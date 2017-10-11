import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

/** Button to add new steps to guide */
class NewStepButton extends React.PureComponent {
  static propTypes = {
    /** Handles click for component */
    handleClick: PropTypes.func.isRequired,
    location: PropTypes.object
  };

  static defaultProps = {
    /** Placeholder method */
    handleClick: () => {}
  }

  render() {
    const {location} = this.props;
    const isActive = location
      .pathname
      .includes('new-step');
    return (
      <div className="new-step__wrapper">
        <Link
          className={isActive
          ? 'btn btn-primary disabled'
          : 'btn btn-primary'}
          title="Create new step"
          to={`${location.pathname}/new-step`}>
          {isActive
            ? 'New step form opened..'
            : 'Add new step'}
        </Link>
      </div>
    );
  }
}

export default NewStepButton;