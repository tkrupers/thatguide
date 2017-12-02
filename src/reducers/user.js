import {LOGOUT_SUCCESS, LOGIN_SUCCESS, REGISTER_SUCCESS} from 'thatguide/actions/user';

let _id = JSON.parse(localStorage.getItem('user'));
const initState = _id ? {loggedIn: true, _id} : {loggedIn: false, _id: null}

export default function user(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {loggedIn: true, ...action.user};
    case LOGOUT_SUCCESS:
      return {loggedIn: false, _id: null};
    default:
      return state;
  }
}