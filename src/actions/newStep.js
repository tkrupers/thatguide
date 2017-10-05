import { makeActionCreator } from 'thatlist/utility/actionCreator';

export const STEP_TITLE_CHANGE = 'STEP_TITLE_CHANGE';
export const STEP_DESCRIPTION_CHANGE = 'STEP_DESCRIPTION_CHANGE';
export const NEW_STEP_SUCCESS = 'NEW_STEP_SUCCESS';
export const NEW_STEP_ERROR = 'NEW_STEP_ERROR';

export const handleStepTitleChange = makeActionCreator(STEP_TITLE_CHANGE, 'title');
export const handleStepDescriptionChange = makeActionCreator(STEP_DESCRIPTION_CHANGE, 'description');