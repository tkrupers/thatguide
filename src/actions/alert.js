import {makeActionCreator} from 'thatguide/utility/actionCreator';

export const DISMISS_ALERT = 'DISMISS_ALERT';

export const dismissAlert = makeActionCreator(DISMISS_ALERT);