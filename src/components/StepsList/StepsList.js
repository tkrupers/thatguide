import React from 'react';
import PropTypes from 'prop-types';
import StepDisplay from 'thatlist/components/StepDisplay';

class StepsList extends React.PureComponent {
  static propTypes = {
    steps: PropTypes.array
  }

  static defaultProps = {
    steps: []
  }

  render() {
    const {steps} = this.props;
    const stepsList = steps.length
      ? steps.map(step => (<StepDisplay key={step.id} {...step}/>))
      : (<StepDisplay/>);

    return (
      <div className="steps">
        <ul>{stepsList}</ul>
      </div>
    );
  }
}

export default StepsList;