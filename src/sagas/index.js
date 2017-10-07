import { all } from 'redux-saga/effects'
import guideDetails from './guideDetails';
import newStepSubmit from './newStepSubmit';

export default function* rootSaga() {
  yield all([
    guideDetails(),
    newStepSubmit()
  ])
}