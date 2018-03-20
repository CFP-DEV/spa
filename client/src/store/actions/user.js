export function fetchUsers(sort = null, order = null) {
  let request = 'http://localhost:5000/users';

  return {
    type: 'FETCH_USERS',
    payload: fetch(request)
      .then(response => response.json()),
  }
}