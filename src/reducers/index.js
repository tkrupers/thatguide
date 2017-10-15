import {combineReducers} from 'redux';
import newStep from './newStep';
import newGuide from './newGuide';
import steps from './steps';
import currentGuide from './currentGuide';
import author from './author';
import guides from './guides';
import loader from './loader';
import alert from './alert';

const thatGuide = combineReducers({
  currentGuide,
  steps,
  newStep,
  newGuide,
  author,
  guides,
  loader,
  alert
});

export default thatGuide;