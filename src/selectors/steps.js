import {createSelector} from 'reselect';

const getSteps = state => state.steps;
const getNewStep = state => state.newStep;

export const getAllSteps = createSelector(
  getSteps,
  steps => steps
);

export const getNewStepSelector = createSelector(
  getNewStep,
  newStep => ({
    title: newStep.title,
    description: newStep.description
  })
);