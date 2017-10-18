import {makeActionCreator} from 'thatguide/utility/actionCreator';
import {getNewStepSelector} from 'thatguide/selectors/steps';
import {getCurrentGuide} from 'thatguide/selectors/guide';


/** Constants */

export const NEW_STEP_SUCCESS = 'NEW_STEP_SUCCESS';
export const NEW_STEP_ERROR = 'NEW_STEP_ERROR';
export const NEW_STEP_SUBMIT = 'NEW_STEP_SUBMIT';
export const UPDATE_STEPS = 'UPDATE_STEPS';
export const UPDATE_STEPS_ERROR = 'UPDATE_STEPS_ERROR';


/** Actions */


/** Action thunks */

export const handleSubmitNewStep = () => (dispatch, getState) => {
  // Get new form data from state
  const payload = getNewStepSelector(getState());
  // Get current guide ID
  const guideId = getCurrentGuide(getState())._id;
  // Dispatch submit action to saga
  dispatch({type: NEW_STEP_SUBMIT, guideId, payload});
}
