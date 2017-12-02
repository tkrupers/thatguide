import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import author from './author';
import guide from './guide';
import loader from './loader';
import alert from './alert';
import user from './user';

const thatGuide = combineReducers({
  author,
  guide,
  loader,
  alert,
  user,
  form: formReducer
});

export default thatGuide;