import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../../store/actions/user';

import Navigation from './components/Navigation';

class Main extends Component {
  componentDidMount() {
    // Fetch Users
    const { fetchUsers } = this.props;

    fetchUsers();
  }

  render () {
    return (
      <div className="main">
        <Navigation />
        Main Template
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchUsers: fetchUsers,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Main);