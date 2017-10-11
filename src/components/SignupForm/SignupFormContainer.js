import {connect} from 'react-redux';
import {tryNewAuthor} from 'thatguide/actions/author';
import SignupForm from './SignupForm';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (data) => dispatch(tryNewAuthor(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);