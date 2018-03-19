export function fetchUsers() {
  return {
    type: 'FETCH_USERS',
    payload: fetch('http://localhost:5000/users')
      .then(response => response.json()),
  }
}