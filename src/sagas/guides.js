import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_GUIDES, FETCH_GUIDES_SUCCESS, FETCH_GUIDES_ERROR, SAVE_NEW_GUIDE, SAVE_NEW_GUIDE_SUCCESS, SAVE_NEW_GUIDE_ERROR} from 'thatguide/actions/guides';
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

function * guides() {
  yield takeLatest(FETCH_GUIDES, fetchAll);
  yield takeLatest(SAVE_NEW_GUIDE, saveGuide)
}

export default guides;