import {SAVE_NEW_GUIDE_SUCCESS, SAVE_NEW_GUIDE_ERROR} from 'thatguide/actions/guides';

const initState = {
  title: '',
  description: '',
  created: false,
  error: null
};

export default function newStepReducer(state = initState, action) {
  switch (action.type) {
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