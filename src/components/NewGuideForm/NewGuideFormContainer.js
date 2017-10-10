import {connect} from 'react-redux';
import {handleGuideTitleChange, handleGuideDescriptionChange, handleSubmitNewGuide} from 'thatguide/actions/guides';
import NewGuideForm from './NewGuideForm';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    handleTitleChange: ({target}) => {
      dispatch(handleGuideTitleChange(target.value));
    },
    handleDescriptionChange: ({target}) => dispatch(handleGuideDescriptionChange(target.value)),
    handleSubmit: event => {
      event.preventDefault();
      dispatch(handleSubmitNewGuide())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGuideForm);