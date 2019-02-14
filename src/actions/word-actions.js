import axios from 'axios';
export const SET_COLLECTION = 'words:setCollection';
export const SHOW_ERROR = 'words:showError';

var fs = require('fs');

export function setCollection(collection) {
  return {
    type: SET_COLLECTION,
    payload: {
      collection: collection
    }
  }
}

export function setWords(file) {
    console.log('setWords', file)
    return dispatch => {
      return {
        type: SET_COLLECTION,
        payload: {
          collection: [{"save":["money","time","later","bank"]}]
        }
      }
    };

}
