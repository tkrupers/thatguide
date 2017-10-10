import {createSelector} from 'reselect';

const currentUser = state => state.user;

export const getCurrentUser = createSelector(
  currentUser,
  user => user
);
