import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import newStep from './newStep';
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
  author,
  guides,
  loader,
  alert,
  form: formReducer
});

export default thatGuide;