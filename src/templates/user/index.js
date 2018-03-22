import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../../store/actions/user';

import Users from '../../pages/users/index';

import Profile from '../../pages/profile/index';

import NewUser from '../../pages/new-user/index';

class UserTemplate extends Component {
  componentDidMount() {
    // Fetch Users
    const { fetchUsers } = this.props;

    fetchUsers();
  }

  render () {
    return (
      <Switch>
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/new" component={NewUser} />
        <Route path="/users/:userID" component={Profile} />
      </Switch>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchUsers: fetchUsers,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserTemplate);