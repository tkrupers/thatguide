export const FETCH_GUIDES = 'FETCH_GUIDES';
export const FETCH_GUIDES_SUCCESS = 'FETCH_GUIDES_SUCCESS';
export const FETCH_GUIDES_ERROR = 'FETCH_GUIDES_ERROR';

export const fetchAllGuides = () => (dispatch, getState) => {
  dispatch({type: FETCH_GUIDES});
}