import {makeActionCreator} from 'thatguide/utility/actionCreator';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const getUserById = makeActionCreator(GET_USER, 'UserId');