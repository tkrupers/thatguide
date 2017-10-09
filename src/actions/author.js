import {makeActionCreator} from 'thatlist/utility/actionCreator';

export const GET_AUTHOR = 'GET_AUTHOR';
export const GET_AUTHOR_SUCCESS = 'GET_AUTHOR_SUCCESS';
export const GET_AUTHOR_ERROR = 'GET_AUTHOR_ERROR';

export const getAuthorById = makeActionCreator(GET_AUTHOR, 'authorId');