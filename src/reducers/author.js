import {GET_AUTHOR_SUCCESS} from 'thatguide/actions/author';

export default function author(state = {}, action) {
  switch (action.type) {
    case GET_AUTHOR_SUCCESS:
      return action.author;
    default:
      return state;
  }
}