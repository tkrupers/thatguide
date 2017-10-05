import React from 'react';
import {connect} from 'react-redux';
import {handleStepTitleChange, handleStepDescriptionChange} from 'thatlist/actions/newStep';
import NewStepForm from './NewStepForm';

const mapStateToProps = ({newStepForm}) => {
  return {
    title: newStepForm.title,
    description: newStepForm.description
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleTitleChange: ({target}) => {
      dispatch(handleStepTitleChange(target.value));
    },
    handleDescriptionChange: ({target}) => dispatch(handleStepDescriptionChange(target.value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewStepForm);