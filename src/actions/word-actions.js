export const SET_COLLECTION = 'words:setCollection';

export function setCollection(collection) {
  return {
    type: SET_COLLECTION,
    payload: {
      collection: collection
    }
  }
}
