import {GET_GUIDE_DETAILS, GET_GUIDE_DETAILS_SUCCESS, GET_GUIDE_DETAILS_ERROR, FETCH_GUIDES, FETCH_GUIDES_SUCCESS, FETCH_GUIDES_ERROR} from 'thatguide/actions/guides';

export default function loader(state = false, action) {
  switch (action.type) {
    case GET_GUIDE_DETAILS:
    case FETCH_GUIDES: 
      return true;
    case GET_GUIDE_DETAILS_SUCCESS:
    case GET_GUIDE_DETAILS_ERROR:
    case FETCH_GUIDES_SUCCESS:
    case FETCH_GUIDES_ERROR:
      return false;
    default:
      return state;
  }
}