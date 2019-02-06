import { SET_USERS, SHOW_ERROR } from '../actions/user-actions';

export default function userReducer(state = [], {type, payload}) {

  switch (type) {
    case SET_USERS:
      return payload.users;
    case SHOW_ERROR:
      console.log('show error', SHOW_ERROR);
      return state;
    default:
      return state;
  }
}
