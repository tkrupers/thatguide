import {connect} from 'react-redux';
import {getCurrentAuthor} from 'thatguide/selectors/author';
import {logout} from 'thatguide/actions/author';
import NavBar from './NavBar';

const mapStateToProps = (state) => {
  return {
    author: getCurrentAuthor(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);