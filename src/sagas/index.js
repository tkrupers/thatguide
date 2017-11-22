import { all } from 'redux-saga/effects'
import guideDetails from './guideDetails';
import newStepSubmit from './newStepSubmit';
import author from './author';
import guides from './guides';
import user from './user';

export default function* rootSaga() {
  yield all([
    guideDetails(),
    newStepSubmit(),
    author(),
    guides(),
    user()
  ]);
}