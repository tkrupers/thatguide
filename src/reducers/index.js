import {combineReducers} from 'redux';
import newStep from './newStep';
import steps from './steps';
import guideDetails from './guideDetails';
import author from './author';

const thatGuide = combineReducers({
  guideDetails,
  steps,
  newStep,
  author
});

export default thatGuide;