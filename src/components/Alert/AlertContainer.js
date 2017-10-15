import {connect} from 'react-redux';
import {dismissAlert} from 'thatguide/actions/alert';
import Alert from './Alert';

const mapStateToProps = ({alert}) => ({
  alert
});

const mapDispatchToProps = dispatch => ({
  dismissAlert: () => dispatch(dismissAlert())
})

export default connect(mapStateToProps, mapDispatchToProps)(Alert);