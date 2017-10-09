import {combineReducers} from 'redux';
import newStep from './newStep';
import steps from './steps';
import guideDetails from './guideDetails';

const thatGuide = combineReducers({
  guideDetails,
  steps,
  newStep
});

export default thatGuide;