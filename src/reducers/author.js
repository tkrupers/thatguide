import {GET_AUTHOR_SUCCESS, GET_AUTHOR_ERROR} from 'thatguide/actions/author';

export default function author(state = {}, action) {
  switch (action.type) {
    case GET_AUTHOR_SUCCESS:
      return {...state, ...action.author};
    case GET_AUTHOR_ERROR:
    default:
      return state;
  }
}