import {GET_GUIDE_DETAILS_SUCCESS} from 'thatguide/actions/guideDetails';

export default function guideDetails(state = {}, action) {
  switch (action.type) {
    case GET_GUIDE_DETAILS_SUCCESS:
      return action.guide;
    default:
      return state;
  }
}