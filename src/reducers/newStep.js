import {
  STEP_TITLE_CHANGE,
  STEP_DESCRIPTION_CHANGE
} from 'thatlist/actions/newStep';

const initState = {
  title: '',
  description: '',
  created: false
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
    default:
      return state;
  }
}