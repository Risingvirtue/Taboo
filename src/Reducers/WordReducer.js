import { SET_COLLECTION } from '../actions/word-actions';
import axios from 'axios';

export default function wordReducer(state = [], {type, payload}) {
  
  switch(type) {

    case  SET_COLLECTION:
      return payload.collection;
    default:
      return state;
  }
}
