import {connect} from 'react-redux';
import StepsList from './StepsList';

const mapStateToProps = (state) => {
  return {
    steps: state.guide.steps,
    countOfSteps: state.guide.steps || 0
  };
}

export default connect(mapStateToProps)(StepsList);