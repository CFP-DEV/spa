import React from 'react';

const Alert = ({data}) => {
  return (
    <div className="alert alert-warning">
      { data.content }
    </div>
  );
}

export default Alert;