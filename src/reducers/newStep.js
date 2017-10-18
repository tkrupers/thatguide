import {NEW_STEP_SUCCESS, NEW_STEP_ERROR} from 'thatguide/actions/steps';

const initState = {
  title: '',
  description: '',
  created: false,
  error: null
};

export default function newStepReducer(state = initState, action) {
  switch (action.type) {
    case NEW_STEP_ERROR:
      return {
        ...state,
        created: false,
        error: action.message
      };
    case NEW_STEP_SUCCESS:
      return initState;
    default:
      return state;
  }
}