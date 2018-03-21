import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const User = ({data, editUser}) => {
  return (
    <tr>
      <th>{ data.id }</th>
      <td>{ data.name }</td>
      <td>{ data.email }</td>
      <td>{ data.phone }</td>
      <td>{ data.address }</td>
      <td>
        <Link to={`/users/${data.id}`} className="btn text-primary p-0 mr-3">
          <i className="fas fa-edit"></i>
        </Link>
      </td>
    </tr>
  );
}

User.propTypes = {
  data: PropTypes.object.isRequired,
}

export default User;