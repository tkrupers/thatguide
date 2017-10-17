import {makeActionCreator} from 'thatguide/utility/actionCreator';

export const GET_AUTHOR = 'GET_AUTHOR';
export const GET_AUTHOR_SUCCESS = 'GET_AUTHOR_SUCCESS';
export const GET_AUTHOR_ERROR = 'GET_AUTHOR_ERROR';
export const NEW_AUTHOR_SUBMIT = 'NEW_AUTHOR_SUBMIT';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const getAuthorById = makeActionCreator(GET_AUTHOR, 'authorId');
export const tryNewAuthor = makeActionCreator(NEW_AUTHOR_SUBMIT, 'payload');
export const logout = makeActionCreator(LOGOUT);