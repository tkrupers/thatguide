import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_GUIDE_DETAILS, GET_GUIDE_DETAILS_SUCCESS, GET_GUIDE_DETAILS_ERROR} from 'thatguide/actions/guides';
import {UPDATE_STEPS, UPDATE_STEPS_ERROR} from 'thatguide/actions/steps';
import guideApi from 'thatguide/services/guide';

function * getDetails(action) {
  try {
    const guide = yield call(guideApi.getDetails, action.guideId);
    yield put({type: GET_GUIDE_DETAILS_SUCCESS, guide});
  } catch (err) {
    yield put({type: GET_GUIDE_DETAILS_ERROR, message: err.message});
  }
}

function * parseStepsToState({guide}) {
  try {
    const {steps} = guide;
    yield put({type: UPDATE_STEPS, steps})
  } catch (err) {
    yield put({ UPDATE_STEPS_ERROR, message: err.message})
  }
}

function * guideDetails() {
  yield takeLatest(GET_GUIDE_DETAILS, getDetails);
  yield takeLatest(GET_GUIDE_DETAILS_SUCCESS, parseStepsToState)
}

export default guideDetails;