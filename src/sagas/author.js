import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_AUTHOR, GET_AUTHOR_SUCCESS, GET_AUTHOR_ERROR} from 'thatguide/actions/author';
import api from 'thatguide/services/author';

function * getAuthor({authorId}) {
  const {author, message} = yield call(api.getAuthorById, authorId);

  if (author) {
    yield put({type: GET_AUTHOR_SUCCESS, author});
  } else {
    yield put({type: GET_AUTHOR_ERROR, message});
  }
}

function * authorSaga() {
  yield takeLatest(GET_AUTHOR, getAuthor);
}

export default authorSaga;