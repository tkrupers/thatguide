import {
  GET_GUIDE_DETAILS,
  GET_GUIDE_DETAILS_SUCCESS,
  GET_GUIDE_DETAILS_ERROR,
  FETCH_GUIDES,
  FETCH_GUIDES_SUCCESS,
  FETCH_GUIDES_ERROR
} from 'thatguide/actions/guides';
import {NEW_STEP_SUBMIT, NEW_STEP_SUCCESS, NEW_STEP_ERROR} from 'thatguide/actions/steps';

const initState = {
  fetching: false,
  saving: false
};

export default function loader(state = initState, action) {
  switch (action.type) {
    case GET_GUIDE_DETAILS:
    case FETCH_GUIDES:
      return {
        ...state,
        fetching: true
      };
    case NEW_STEP_SUBMIT:
      return {
        ...state,
        saving: true
      };
    case GET_GUIDE_DETAILS_SUCCESS:
    case GET_GUIDE_DETAILS_ERROR:
    case FETCH_GUIDES_SUCCESS:
    case FETCH_GUIDES_ERROR:
    case NEW_STEP_SUCCESS:
    case NEW_STEP_ERROR:
      return {
        saving: false,
        fetching: false
      };
    default:
      return state;
  }
}