import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_AUTHOR, GET_AUTHOR_SUCCESS, GET_AUTHOR_ERROR} from 'thatguide/actions/author';
import authorApi from 'thatguide/services/author';

function * getAuthor(action) {
  try {
    const author = yield call(authorApi.getAuthorById, action.authorId);
    yield put({type: GET_AUTHOR_SUCCESS, author});
  } catch (err) {
    // TODO: add better error handling
    yield put({type: GET_AUTHOR_ERROR, message: err.message});
  }
}

function * authorSaga() {
  yield takeLatest(GET_AUTHOR, getAuthor);
}

export default authorSaga;