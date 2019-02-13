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
    return dispatch => {

      fs.readFile('../words/' + file + '.txt', 'utf8', function(error, data) {
        console.log(error, data);
        if (error) {
          return {
            type: SHOW_ERROR,
            payload: {
              error: error
            }
          }
        } else {
          return {
            type: SET_COLLECTION,
            payload: {
              collection: JSON.parse(data.toString)
            }
          }
        }
      })
    };

}
