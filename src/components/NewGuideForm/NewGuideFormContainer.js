import {connect} from 'react-redux';
import {handleSubmitNewGuide} from 'thatguide/actions/guides';
import NewGuideForm from './NewGuideForm';

const mapStateToProps = (state) => {
  return {guideForm: state.form.guideForm}
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: () => dispatch(handleSubmitNewGuide())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGuideForm);