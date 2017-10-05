import React from 'react';
import PropTypes from 'prop-types';

class NewStepButton extends React.PureComponent {
  static propTypes = {
    handleClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    handleClick: () => {}
  }

  render() {
    return (
      <div className="new-step__wrapper">
        <button
          className="btn btn-primary"
          title="Create new step"
          onClick={this.props.handleClick}>
          Add new step
        </button>
      </div>
    );
  }
}

export default NewStepButton;