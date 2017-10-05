import {STEP_TITLE_CHANGE, STEP_DESCRIPTION_CHANGE, NEW_STEP_SUCCESS, NEW_STEP_ERROR} from 'thatlist/actions/newStep';

const initState = {
  title: '',
  description: '',
  created: false,
  error: null
};

export default function newStepReducer(state = initState, action) {
  switch (action.type) {
    case STEP_TITLE_CHANGE:
      return {
        ...state,
        title: action.title
      };
    case STEP_DESCRIPTION_CHANGE:
      return {
        ...state,
        description: action.description
      }
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