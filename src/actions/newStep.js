import {makeActionCreator} from 'thatlist/utility/actionCreator';
import {getNewStepSelector} from 'thatlist/selectors/steps';

/** Constants */

export const STEP_TITLE_CHANGE = 'STEP_TITLE_CHANGE';
export const STEP_DESCRIPTION_CHANGE = 'STEP_DESCRIPTION_CHANGE';
export const NEW_STEP_SUCCESS = 'NEW_STEP_SUCCESS';
export const NEW_STEP_ERROR = 'NEW_STEP_ERROR';
export const NEW_STEP_SUBMIT = 'NEW_STEP_SUBMIT';

/** Actions */

export const handleStepTitleChange = makeActionCreator(STEP_TITLE_CHANGE, 'title');
export const handleStepDescriptionChange = makeActionCreator(STEP_DESCRIPTION_CHANGE, 'description');

/** Action thunks */

export const handleSubmitNewStep = () => (dispatch, getState) => {
  // Get new form data from state
  const payload = getNewStepSelector(getState());

  // Dispatch submit action to saga
  dispatch({type: NEW_STEP_SUBMIT, payload});
}