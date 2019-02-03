import { SET_COLLECTION } from '../actions/word-actions';

export default function wordReducer(state = [], {type, payload}) {

  switch(type) {
    case  SET_COLLECTION:
      return 'hello';
    default:
      return state;
  }
}
