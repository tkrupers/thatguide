import {connect} from 'react-redux';
import {tryRegister} from 'thatguide/actions/user';
import {getCurrentAuthor} from 'thatguide/selectors/author';
import SignupForm from './SignupForm';

const mapStateToProps = (state) => {
  return {
    author: getCurrentAuthor(state),
    registerForm: state.form.register
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (data) => dispatch(tryRegister(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);