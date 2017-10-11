import {connect} from 'react-redux';
import StepsList from './StepsList';
import {getStepCount, getAllSteps} from 'thatguide/selectors/steps';

const mapStateToProps = (state) => {
  return {
    steps: getAllSteps(state),
    countOfSteps: getStepCount(state)
  };
}

export default connect(mapStateToProps)(StepsList);