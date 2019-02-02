import { SET_COLLECTION } from '../actions/word-actions';

export default function wordReducer(state = [], {type, payload}) {
  console.log('payload', payload)
  return state;
  switch(type) {
    case  SET_COLLECTION:
      return payload.collection;
    default:
      return state;
  }
}
