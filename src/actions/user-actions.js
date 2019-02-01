export const UPDATE_USER = 'users:UpdateUser';

export function addUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      users: newUser
    }
  }
}
