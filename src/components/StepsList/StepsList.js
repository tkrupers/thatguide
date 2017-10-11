import React from 'react';
import PropTypes from 'prop-types';
import StepDisplay from 'thatguide/components/StepDisplay';
import withPlaceholder from 'thatguide/components/WithPlaceholder';

class StepsList extends React.PureComponent {
  static propTypes = {
    steps: PropTypes.array
  }

  static defaultProps = {
    steps: []
  }

  render() {
    const {steps, countOfSteps} = this.props;
    const stepsList = steps.length
      ? steps.map((step, index) => <StepDisplay key={step._id} {...step} stepNumber={index + 1}/>)
      : (<StepDisplay/>);

    return (
      <div className="steps">
        <h3>Steps
          <span className="badge badge-secondary">{countOfSteps}</span>
        </h3>
        {stepsList}
      </div>
    );
  }
}

export default withPlaceholder(StepsList);