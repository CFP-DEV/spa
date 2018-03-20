import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const User = ({data}) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-3">
      <NavLink to={`/users/${data.id}`} className="user bg-white rounded d-flex justify-content-center flex-wrap p-3">
        <div className="user__info w-100">
          <h5 className="user__name text-center">
            { data.name }
          </h5>
          <h6 className="text-primary text-center"> 
            { data.phone }
          </h6>
        </div>
      </NavLink>
    </div>
  );
}

User.propTypes = {
  data: PropTypes.object.isRequired,
}

export default User;