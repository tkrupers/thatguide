import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_AUTHOR, GET_AUTHOR_SUCCESS, GET_AUTHOR_ERROR, NEW_AUTHOR_SUBMIT, LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR, LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, REGISTER, REGISTER_ERROR, REGISTER_SUCCESS} from 'thatguide/actions/author';
import api from 'thatguide/services/author';

function * getAuthor({authorId}) {
  const {author, message} = yield call(api.getAuthorById, authorId);

  if (author) {
    yield put({type: GET_AUTHOR_SUCCESS, author});
  } else {
    yield put({type: GET_AUTHOR_ERROR, message});
  }
}

function * registerMe({payload}) {
  const {author, message} = yield call(api.register, payload);

  if (author) {
    // TODO: Should be web token
    localStorage.setItem('author', JSON.stringify(author._id));
    yield put({type: REGISTER_SUCCESS, author})
  } else {
    yield put({type: REGISTER_ERROR, message})
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

function * LogMeIn({payload}) {
  const {author, message} = yield call(api.login, payload);

  if (author) {
    localStorage.setItem('author', JSON.stringify(author._id));
    yield put({type: LOGIN_SUCCESS, author});
  } else {
    yield put({type: LOGIN_ERROR, message});
  }
}

function * authorSaga() {
  yield takeLatest(GET_AUTHOR, getAuthor);
  yield takeLatest(REGISTER, registerMe);
  yield takeLatest(LOGOUT, logMeOut);
  yield takeLatest(LOGIN, LogMeIn);
}

export default authorSaga;