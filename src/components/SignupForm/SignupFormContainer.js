import {connect} from 'react-redux';
import {tryRegister} from 'thatguide/actions/author';
import {getCurrentAuthor} from 'thatguide/selectors/author';
import SignupForm from './SignupForm';

const mapStateToProps = (state) => {
  return {
    author: getCurrentAuthor(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (data) => dispatch(tryRegister(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);