import axios from 'axios';
export const UPDATE_USER = 'users:UpdateUser';
export const SHOW_ERROR = 'users:showError';
export function addUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export function showError() {
  return {
    type: SHOW_ERROR,
    payload: 'ERROR!!'
  }
}

export function apiRequest() {
  return dispatch => {
    var url = 'https://www.google.com/';
    axios.get(url)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch(showError());
      })
  }
}
