import {connect} from 'react-redux';
import {handleStepTitleChange, handleStepDescriptionChange, handleSubmitNewStep} from 'thatlist/actions/newStep';
import NewStepForm from './NewStepForm';

const mapStateToProps = ({newStep}) => {
  return {title: newStep.title, description: newStep.description}
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