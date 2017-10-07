import {combineReducers} from 'redux';
import newStepForm from './newStep';
import steps from './steps';
import guideDetails from './guideDetails';

const thatGuide = combineReducers({
  guideDetails,
  steps,
  newStepForm
});

export default thatGuide;