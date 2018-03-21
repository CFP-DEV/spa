import React from 'react';
import classNames from 'classnames';

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

export default Alert;