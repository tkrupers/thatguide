import {FETCH_GUIDES_SUCCESS, GET_GUIDE_DETAILS_SUCCESS, SAVE_NEW_GUIDE_ERROR} from 'thatguide/actions/guides';

const initState = {
  guides: [],
  guide: {
    steps: []
  },
  error: null
}

export default function guide(state = initState, action) {
  switch (action.type) {
    case FETCH_GUIDES_SUCCESS:
      return {
        ...state,
        guides: (state.guides || []).concat(action.guides)
      };
    case GET_GUIDE_DETAILS_SUCCESS:
      return {
        ...state,
        guide: action.guide
      };
    case SAVE_NEW_GUIDE_ERROR:
      return {
        ...state,
        error: action.message
      };
    default:
      return state;
  }
}