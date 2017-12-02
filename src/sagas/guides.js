import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_GUIDES, FETCH_GUIDES_SUCCESS, FETCH_GUIDES_ERROR, SAVE_NEW_GUIDE, SAVE_NEW_GUIDE_SUCCESS, SAVE_NEW_GUIDE_ERROR, GET_GUIDE_DETAILS, GET_GUIDE_DETAILS_SUCCESS, GET_GUIDE_DETAILS_ERROR} from 'thatguide/actions/guides';
import {NEW_STEP_SUBMIT, NEW_STEP_ERROR, NEW_STEP_SUCCESS, UPDATE_STEPS, UPDATE_STEPS_ERROR} from 'thatguide/actions/steps';
import guideApi from 'thatguide/services/guide';

function * fetchAll(action) {
  try {
    const guides = yield call(guideApi.fetchAll);
    yield put({type: FETCH_GUIDES_SUCCESS, guides});
  } catch (err) {
    yield put({type: FETCH_GUIDES_ERROR, message: err.message});
  }
}

function * saveGuide(action) {
  try {
    const newGuide = yield call(guideApi.saveGuide, action.payload);
    yield put({type: SAVE_NEW_GUIDE_SUCCESS, newGuide});
  } catch (err) {
    yield put({type: SAVE_NEW_GUIDE_ERROR, message: err.message})
  }
}

function * saveStep(action) {
  try {
    const result = yield call(guideApi.saveNewStep, {id: action.guideId, payload: action.payload});
    yield put({type: NEW_STEP_SUCCESS, result});
  } catch (err) {
    // TODO: add better error handling
    yield put({type: NEW_STEP_ERROR, message: err.message});
  }
}

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

function * guides() {
  yield takeLatest(FETCH_GUIDES, fetchAll);
  yield takeLatest(SAVE_NEW_GUIDE, saveGuide);
  yield takeLatest(NEW_STEP_SUBMIT, saveStep);
  yield takeLatest(GET_GUIDE_DETAILS, getDetails);
  yield takeLatest(GET_GUIDE_DETAILS_SUCCESS, parseStepsToState);
}

export default guides;