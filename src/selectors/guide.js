import {createSelector} from 'reselect';

const getGuide = state => state.currentGuide;
const guides = state => state.guides;
const getAuthor = state => getGuide.author;
const newGuideTitle = state => state.newGuide.title;
const newGuideDescription = state => state.newGuide.description;

export const getCurrentGuide = createSelector(
  getGuide,
  guide => guide
);

export const getAllGuides = createSelector(
  guides,
  guides => guides
);

export const getGuideAuthor = createSelector(
  getAuthor,
  author => author
);

export const getNewGuideTitle = createSelector(
  newGuideTitle,
  title => title
);

export const getNewGuideDescription = createSelector(
  newGuideDescription,
  description => description
);
