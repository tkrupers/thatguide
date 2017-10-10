import {FETCH_GUIDES_SUCCESS} from 'thatguide/actions/guides';

export default function guides(state = [], action) {
  switch (action.type) {
    case FETCH_GUIDES_SUCCESS:
      return action.guides;
    default:
      return state;
  }
}