import {GET_AUTHOR_SUCCESS} from 'thatguide/actions/author';

let user = JSON.parse(localStorage.getItem('author'));
const initState = user ? {loggedIn: true, user} : {loggedIn: false, user: null}

export default function author(state = initState, action) {
  switch (action.type) {
    case GET_AUTHOR_SUCCESS:
      return action.author;
    default:
      return state;
  }
}