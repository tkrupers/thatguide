import {makeActionCreator} from 'thatguide/utility/actionCreator';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const tryRegister = makeActionCreator(REGISTER, 'payload');
export const tryLogin = makeActionCreator(LOGIN, 'payload');
export const logout = makeActionCreator(LOGOUT);