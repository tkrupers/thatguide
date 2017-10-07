import {connect} from 'react-redux';
import StepsList from './StepsList';

const mapStateToProps = (state) => {
  return {
    steps: state.steps
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(StepsList);