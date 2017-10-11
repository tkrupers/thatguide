import {createSelector} from 'reselect';

const currentAuthor = state => state.author;

export const getCurrentAuthor = createSelector(
  currentAuthor,
  author => author
);
