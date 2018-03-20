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
      { users.map(user => <User key={user.id} data={user} />) }
    </div>
  );
}

export default UserList;