export const SET_COLLECTION = 'words:setCollection';
import 'axios' from axios;

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
      var url = '/' + file;
      var response = async axios.get(url);
      return {
        type: SET_COLLECTION,
        payload: {
          collection: response.data
        }
      }
    }
}
