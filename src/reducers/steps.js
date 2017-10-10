import {NEW_STEP_SUCCESS} from 'thatguide/actions/newStep';
import {UPDATE_STEPS} from 'thatguide/actions/steps';

const initState = [
  {
    id: 0,
    stepNumber: 0,    
    title: 'This is step 0',
    description: 'Step 0 description coming from default state'
  }
];

export default function stepsList(state = initState, action) {
  switch (action.type) {
    case UPDATE_STEPS:
      return [
        ...state,
        ...action.steps
      ];
    case NEW_STEP_SUCCESS:
      return [
        ...state,
        ...action.step
      ];
    default:
      return state;
  }
}