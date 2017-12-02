import {connect} from 'react-redux';
import {tryLogin} from 'thatguide/actions/user';
import {getCurrentAuthor} from 'thatguide/selectors/author';
import LoginForm from './LoginForm';

const mapStateToProps = (state) => {
  return {
    author: getCurrentAuthor(state),
    loginForm: state.form.login
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (data) => dispatch(tryLogin(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);