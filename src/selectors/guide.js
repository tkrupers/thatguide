import {createSelector} from 'reselect';

const getGuide = state => state.guideDetails;

export const getCurrentGuideId = createSelector(
  getGuide,
  guide => guide.id
);
