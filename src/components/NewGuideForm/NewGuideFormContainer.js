import {connect} from 'react-redux';
import {handleSubmitNewGuide} from 'thatguide/actions/guides';
import NewGuideForm from './NewGuideForm';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: event => {
      event.preventDefault();
      dispatch(handleSubmitNewGuide())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGuideForm);