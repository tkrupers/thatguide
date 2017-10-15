import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_AUTHOR, GET_AUTHOR_SUCCESS, GET_AUTHOR_ERROR, NEW_AUTHOR_SUBMIT} from 'thatguide/actions/author';
import api from 'thatguide/services/author';

function * getAuthor({authorId}) {
  const {response, error} = yield call(api.getAuthorById, authorId);

  if (response) {
    yield put({type: GET_AUTHOR_SUCCESS, author: response});
  } else {
    yield put({type: GET_AUTHOR_ERROR, error});
  }
}

function * newAuthor({payload}) {
  const {author, error} = yield call(api.registerNewAuthor, payload);

  if (author) {
    // TODO: Should be web token
    localStorage.setItem('author', JSON.stringify(author._id));
    yield put({type: GET_AUTHOR_SUCCESS, author})
  } else {
    yield put({type: GET_AUTHOR_ERROR, error})
  }
}

function * authorSaga() {
  yield takeLatest(GET_AUTHOR, getAuthor);
  yield takeLatest(NEW_AUTHOR_SUBMIT, newAuthor);
}

export default authorSaga;