import {GET_AUTHOR_SUCCESS, GET_AUTHOR_ERROR, LOGOUT} from 'thatguide/actions/author';

let id = JSON.parse(localStorage.getItem('author'));
const initState = id ? {loggedIn: true, id} : {loggedIn: false, id: null}

export default function author(state = initState, action) {
  switch (action.type) {
    case GET_AUTHOR_SUCCESS:
      return {...action.author, loggedIn: true};
    case GET_AUTHOR_ERROR:
    case LOGOUT:
      return initState;
    default:
      return state;
  }
}