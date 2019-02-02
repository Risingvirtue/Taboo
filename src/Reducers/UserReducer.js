import { UPDATE_USER, SHOW_ERROR } from '../actions/user-actions';

export default function userReducer(state = [], {type, payload}) {
  switch (type) {
    case UPDATE_USER:
      state.push(payload.user);
      return state;
    case SHOW_ERROR:
      state.push(payload);
    default:
    return state;
  }

  return state;
}
