import {call, put, takeLatest} from 'redux-saga/effects';
import {LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR, LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, REGISTER, REGISTER_ERROR, REGISTER_SUCCESS} from 'thatguide/actions/user';
import api from 'thatguide/services/user';

function * registerMe({payload}) {
  const {user, message} = yield call(api.register, payload);

  if (user) {
    // TODO: Should be web token
    localStorage.setItem('user', JSON.stringify(user._id));
    yield put({type: REGISTER_SUCCESS, user})
  } else {
    yield put({type: REGISTER_ERROR, message})
  }
}

function * logMeOut() {
  const {logout, message} = yield call(api.logout);

  if (logout) {
    localStorage.removeItem('user');
    yield put({type: LOGOUT_SUCCESS});
  } else {
    yield put({type: LOGOUT_ERROR, message});
  }
}

function * LogMeIn({payload}) {
  const {user, message} = yield call(api.login, payload);

  if (user) {
    localStorage.setItem('user', JSON.stringify(user._id));
    yield put({type: LOGIN_SUCCESS, user});
  } else {
    yield put({type: LOGIN_ERROR, message});
  }
}

function * userSaga() {
  yield takeLatest(REGISTER, registerMe);
  yield takeLatest(LOGOUT, logMeOut);
  yield takeLatest(LOGIN, LogMeIn);
}

export default userSaga;