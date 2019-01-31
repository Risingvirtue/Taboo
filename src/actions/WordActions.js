export const UPDATE_WORD = 'words:UpdateWord';

export function addWord(word) {
  return {
    type: UPDATE_WORD,
    payload: {
      word: word
    }
  }
}
