import {GET_GUIDE_DETAILS_SUCCESS} from 'thatguide/actions/guides';

export default function currentGuide(state = {}, action) {
  switch (action.type) {
    case GET_GUIDE_DETAILS_SUCCESS:
      return action.guide;
    default:
      return state;
  }
}