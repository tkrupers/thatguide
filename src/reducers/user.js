import {GET_USER_SUCCESS} from 'thatguide/actions/user';

// TODO: should come from DB
const initState = {
  _id: "59dcc218ff2f8accc42450af",
  name: 'Thomas Krupers',
  email: 'thomaskrupers@gmail.com'
}; 

export default function user(state = initState, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return action.user;
    default:
      return state;
  }
}