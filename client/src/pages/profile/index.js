import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../../store/reducers/user';

class Profile extends Component {
  render () {
    console.log(this.props.user);
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-4">
              Avatar
              <button className="btn btn-reset btn-outline-primary w-100 mt-3 mb-1">
                Edit
              </button>
              <button className="btn btn-reset btn-outline-danger w-100">
                Remove
              </button>
            </div>
            <div className="col-8">
              <form className="form">
                <div className="form-row">
                  <div className="form-group">
                    test
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  const { userID } = ownProps.match.params;
  
  return {
    user: selectUser(user.users, userID),
  }
}

export default connect(mapStateToProps)(Profile);