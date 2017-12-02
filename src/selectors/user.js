import {createSelector} from 'reselect';

const currentUser = state => state.user;

export const getUser = createSelector(
  currentUser,
  user => user
);
