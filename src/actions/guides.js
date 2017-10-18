import {makeActionCreator} from 'thatguide/utility/actionCreator';
import {getCurrentAuthor} from 'thatguide/selectors/author';
import {getNewGuideTitle, getNewGuideDescription} from 'thatguide/selectors/guide';


/** Constants */
export const SAVE_NEW_GUIDE = 'SAVE_NEW_GUIDE';
export const SAVE_NEW_GUIDE_SUCCESS = 'SAVE_NEW_GUIDE_SUCCESS';
export const SAVE_NEW_GUIDE_ERROR = 'SAVE_NEW_GUIDE_ERROR';
export const FETCH_GUIDES = 'FETCH_GUIDES';
export const FETCH_GUIDES_SUCCESS = 'FETCH_GUIDES_SUCCESS';
export const FETCH_GUIDES_ERROR = 'FETCH_GUIDES_ERROR';
export const GET_GUIDE_DETAILS = 'GET_GUIDE_DETAILS';
export const GET_GUIDE_DETAILS_SUCCESS = 'GET_GUIDE_DETAILS_SUCCESS';
export const GET_GUIDE_DETAILS_ERROR = 'GET_GUIDE_DETAILS_ERROR';


/** Actions */

export const getGuideDetails = makeActionCreator(GET_GUIDE_DETAILS, 'guideId');


/** Action thunks */

export const handleSubmitNewGuide = () => (dispatch, getState) => {
  const payload = {
    title: getNewGuideTitle(getState()),
    description: getNewGuideDescription(getState()),
    author: getCurrentAuthor(getState())._id,
  };

  dispatch({ type: SAVE_NEW_GUIDE, payload});
}

export const fetchAllGuides = () => (dispatch, getState) => {
  dispatch({type: FETCH_GUIDES});
}
