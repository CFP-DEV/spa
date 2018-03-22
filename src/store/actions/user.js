export function fetchUsers() {
  //let request = 'http://localhost:5000/users';
  let request = 'https://jsonplaceholder.typicode.com/users';

  return {
    type: 'FETCH_USERS',
    payload: fetch(request)
      .then(response => response.json()),
  }
}

export function updateUser(userID, data) {
  //let request = `http://localhost:5000/users/${userID}`;
  let request = `https://jsonplaceholder.typicode.com/users/${userID}`;

  return {
    type: 'UPDATE_USER',
    payload: fetch(request, {
      method: 'PATCH',
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        website: data.website
      })
    })
    .then(response => response.json()),
  }
}

export function deleteUser(userID) {
  //let request = `http://localhost:5000/users/${userID}`;
  let request = `https://jsonplaceholder.typicode.com/users/${userID}`;

  return {
    type: 'DELETE_USER',
    payload: fetch(request, { 
      method: 'DELETE' 
    })
    .then(() => userID)
  }
}

export function createUser(data) {
  //let request = 'http://localhost:5000/users';
  let request = `https://jsonplaceholder.typicode.com/users`;

  return {
    type: 'CREATE_USER',
    payload: fetch(request, {
      method: 'POST',
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        website: data.website
      })
    })
    .then(response => response.json()),
  }
}