import { UPDATE_USER } from '../actions/user-actions';

export default function userReducer(state = [], {type, payload}) {
  switch (type) {
    case UPDATE_USER:
      state.push(payload.user);
      return state;
    default:
    return state;
  }

  return state;
}