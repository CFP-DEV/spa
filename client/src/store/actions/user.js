export function fetchUsers() {
  let request = 'http://localhost:5000/users';

  return {
    type: 'FETCH_USERS',
    payload: fetch(request)
      .then(response => response.json()),
  }
}

export function updateUser(userID, data) {
  let request = `http://localhost:5000/users/${userID}`;

  return {
    type: 'UPDATE_USER',
    payload: fetch(request, {
      method: 'PATCH',
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address
      })
    })
    .then(response => response.json()),
  }
}