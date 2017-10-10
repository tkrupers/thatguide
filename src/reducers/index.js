import {combineReducers} from 'redux';
import newStep from './newStep';
import steps from './steps';
import guideDetails from './guideDetails';
import author from './author';
import guides from './guides';

const thatGuide = combineReducers({
  guideDetails,
  steps,
  newStep,
  author,
  guides  
});

export default thatGuide;