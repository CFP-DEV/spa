import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const User = ({data}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
      <Link to={`/users/${data.id}`} className="user d-flex bg-white rounded flex-wrap justify-content-center">
        <div className="user__avatar d-flex align-items-center justify-content-center rounded-circle h6">
          #{ data.id }
        </div>
        <div className="user__info text-center w-100">
          <h5 className="user__info__name">
            { data.name }
          </h5>
          <h6 className="user__info__phone text-primary">
            { data.phone }
          </h6>
        </div>
      </Link>
    </div>
  );
}

User.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
}

export default User;