import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Alert = ({type = 'warning', children = undefined}) => {
  const alertStyle = classNames({
    'alert': true,
    [`alert-${type}`]: true,
  });

  return (
    <div className={alertStyle}>
      { children }
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
}

export default Alert;