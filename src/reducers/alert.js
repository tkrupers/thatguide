import {GET_AUTHOR_SUCCESS, GET_AUTHOR_ERROR, LOGOUT_SUCCESS} from 'thatguide/actions/author';
import {DISMISS_ALERT} from 'thatguide/actions/alert';

const initState = {
  show: false,
  status: null,
  message: ''
};

export default function alert(state = initState, action) {
  switch (action.type) {
    case GET_AUTHOR_ERROR:
      return {show: true, status: 'danger', message: action.message};
    case GET_AUTHOR_SUCCESS:
      return {show: true, status: 'success', message: `Welcome ${action.author.email}`}
    case DISMISS_ALERT:
    case LOGOUT_SUCCESS:
      return initState;
    default:
      return state;
  }
}