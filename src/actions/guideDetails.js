import {makeActionCreator} from 'thatlist/utility/actionCreator';

export const GET_GUIDE_DETAILS = 'GET_GUIDE_DETAILS';
export const GET_GUIDE_DETAILS_SUCCESS = 'GET_GUIDE_DETAILS_SUCCESS';
export const GET_GUIDE_DETAILS_ERROR = 'GET_GUIDE_DETAILS_ERROR';

export const getGuideDetails = makeActionCreator(GET_GUIDE_DETAILS, 'guideId');