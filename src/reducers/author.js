import {GET_AUTHOR_SUCCESS, GET_AUTHOR_ERROR, LOGOUT_SUCCESS, LOGIN_SUCCESS, LOGIN_ERROR} from 'thatguide/actions/author';

let _id = JSON.parse(localStorage.getItem('author'));
const initState = _id ? {loggedIn: true, _id} : {loggedIn: false, _id: null}

export default function author(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, loggedIn: true};
    case GET_AUTHOR_SUCCESS:
      return {...state, ...action.author};
    case LOGOUT_SUCCESS:
    case LOGIN_ERROR:
      return {loggedIn: false, _id: null};
    case GET_AUTHOR_ERROR:
      return initState;
    default:
      return state;
  }
}