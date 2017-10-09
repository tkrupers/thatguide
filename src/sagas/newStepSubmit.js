import {call, put, takeLatest} from 'redux-saga/effects';
import {NEW_STEP_SUBMIT, NEW_STEP_ERROR, NEW_STEP_SUCCESS} from 'thatlist/actions/newStep';
import stepApi from 'thatlist/services/step';

function * postForm(action) {
  try {
    const result = yield call(stepApi.newStep, {id: action.guideId, payload: action.payload});
    yield put({type: NEW_STEP_SUCCESS, result});
  } catch (err) {
    // TODO: add better error handling
    yield put({type: NEW_STEP_ERROR, message: err.message});
  }
}

function * newStepSubmit() {
  yield takeLatest(NEW_STEP_SUBMIT, postForm);
}

export default newStepSubmit;