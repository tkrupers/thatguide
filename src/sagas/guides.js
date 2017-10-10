import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_GUIDES, FETCH_GUIDES_SUCCESS, FETCH_GUIDES_ERROR} from 'thatguide/actions/guides';
import guideApi from 'thatguide/services/guide';

function * fetchAll(action) {
  try {
    const guides = yield call(guideApi.fetchAll);
    yield put({type: FETCH_GUIDES_SUCCESS, guides});
  } catch (err) {
    yield put({type: FETCH_GUIDES_ERROR, message: err.message});
  }
}

function * guides() {
  yield takeLatest(FETCH_GUIDES, fetchAll);
}

export default guides;