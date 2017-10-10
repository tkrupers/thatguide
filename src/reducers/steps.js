import {NEW_STEP_SUCCESS} from 'thatguide/actions/steps';
import {UPDATE_STEPS} from 'thatguide/actions/steps';


export default function stepsList(state = [], action) {
  switch (action.type) {
    case UPDATE_STEPS:
      return action.steps;
    case NEW_STEP_SUCCESS:
      return [
        ...state,
        ...action.step
      ];
    default:
      return state;
  }
}