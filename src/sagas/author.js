import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_AUTHOR, GET_AUTHOR_SUCCESS, GET_AUTHOR_ERROR, NEW_AUTHOR_SUBMIT, LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR} from 'thatguide/actions/author';
import api from 'thatguide/services/author';

function * getAuthor({authorId}) {
  const {author, message} = yield call(api.getAuthorById, authorId);

  if (author) {
    yield put({type: GET_AUTHOR_SUCCESS, author});
  } else {
    yield put({type: GET_AUTHOR_ERROR, message});
  }
}

function * newAuthor({payload}) {
  const {author, message} = yield call(api.registerNewAuthor, payload);

  if (author) {
    // TODO: Should be web token
    localStorage.setItem('author', JSON.stringify(author._id));
    yield put({type: GET_AUTHOR_SUCCESS, author})
  } else {
    yield put({type: GET_AUTHOR_ERROR, message})
  }
}

function * logMeOut() {
  const {logout, message} = yield call(api.logout);

  if (logout) {
    localStorage.removeItem('author');
    yield put({type: LOGOUT_SUCCESS});
  } else {
    yield put({type: LOGOUT_ERROR, message});
  }
}

function * authorSaga() {
  yield takeLatest(GET_AUTHOR, getAuthor);
  yield takeLatest(NEW_AUTHOR_SUBMIT, newAuthor);
  yield takeLatest(LOGOUT, logMeOut);
}

export default authorSaga;