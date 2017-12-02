import {connect} from 'react-redux';
import {getUser} from 'thatguide/selectors/user';
import {logout} from 'thatguide/actions/user';
import NavBar from './NavBar';

const mapStateToProps = (state) => {
  return {
    user: getUser(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);