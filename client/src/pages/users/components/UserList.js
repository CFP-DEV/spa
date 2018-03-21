import React from 'react';

import User from './User';

const UserList = ({data, search, sort, order}) => {
  let users = data;

  if (sort && order)
    users = users.sort((a, b) => order === 'asc' ? a[sort] > b[sort] : a[sort] < b[sort])

  if (search)
    users = users.filter(user => user.name.includes(search));

  return (
    <div className="row">
      <div className="col-12">
        <div className="table-responsive-xl">
          <table className="table bg-white rounded">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Imię i Nazwisko</th>
                <th>E-mail</th>
                <th>Numer Telefonu</th>
                <th>Adres</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => <User key={user.id} data={user} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserList;