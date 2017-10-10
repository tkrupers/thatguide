import {connect} from 'react-redux';
import {handleStepTitleChange, handleStepDescriptionChange, handleSubmitNewStep} from 'thatguide/actions/steps';
import NewStepForm from './NewStepForm';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    handleTitleChange: ({target}) => {
      dispatch(handleStepTitleChange(target.value));
    },
    handleDescriptionChange: ({target}) => dispatch(handleStepDescriptionChange(target.value)),
    handleSubmit: event => {
      event.preventDefault();
      dispatch(handleSubmitNewStep())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewStepForm);