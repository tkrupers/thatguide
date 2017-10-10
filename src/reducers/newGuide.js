import {GUIDE_TITLE_CHANGE, GUIDE_DESCRIPTION_CHANGE, SAVE_NEW_GUIDE_SUCCESS, SAVE_NEW_GUIDE_ERROR} from 'thatguide/actions/guides';

const initState = {
  title: '',
  description: '',
  created: false,
  error: null
};

export default function newStepReducer(state = initState, action) {
  switch (action.type) {
    case GUIDE_TITLE_CHANGE:
      return {
        ...state,
        title: action.title
      };
    case GUIDE_DESCRIPTION_CHANGE:
      return {
        ...state,
        description: action.description
      }
    case SAVE_NEW_GUIDE_ERROR:
      return {
        ...state,
        created: false,
        error: action.message
      };
    case SAVE_NEW_GUIDE_SUCCESS:
      return initState;
    default:
      return state;
  }
}