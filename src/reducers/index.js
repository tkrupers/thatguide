import {combineReducers} from 'redux';
import newStep from './newStep';
import newGuide from './newGuide';
import steps from './steps';
import currentGuide from './currentGuide';
import author from './author';
import guides from './guides';
import user from './user';
import loader from './loader';

const thatGuide = combineReducers({
  currentGuide,
  steps,
  newStep,
  newGuide,
  author,
  guides,
  user,
  loader
});

export default thatGuide;