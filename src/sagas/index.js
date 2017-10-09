import { all } from 'redux-saga/effects'
import guideDetails from './guideDetails';
import newStepSubmit from './newStepSubmit';
import author from './author';

export default function* rootSaga() {
  yield all([
    guideDetails(),
    newStepSubmit(),
    author()
  ]);
}