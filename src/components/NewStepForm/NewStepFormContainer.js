import {connect} from 'react-redux';
import {handleSubmitNewStep} from 'thatguide/actions/steps';
import NewStepForm from './NewStepForm';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: event => {
      event.preventDefault();
      dispatch(handleSubmitNewStep())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewStepForm);