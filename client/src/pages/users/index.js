import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../store/actions/user';

import UserList from './components/UserList';

import Loading from '../../components/Loading';

class Users extends Component {
  state = {search: '', sort: '', order: 'asc'}

  handleChange = (e) => {
    if (e.target.name === 'sort') {
      let sort = e.target.value.split(' ');

      this.setState({
        [e.currentTarget.name]: sort[0],
        order: sort[1],
      });
    } else {
      this.setState({
        [e.currentTarget.name]: e.currentTarget.value,
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleRefresh = (e) => {
    e.preventDefault();
    const { fetchUsers } = this.props;

    // Fetch Users from the DB
    fetchUsers();
  }

  render () {
    const { user, isLoaded } = this.props;

    return (
      <div className="users">
        <div className="row mb-3">
          <div className="col-12">
            <h2>Użytkownicy</h2>
          </div>
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-12 col-sm-6">
              <label htmlFor="search">
                Szukaj
              </label>
              <input type="text" 
                    className="form-control" 
                    id="search" 
                    name="search"
                    onChange={this.handleChange}
                    value={this.state.search} />
            </div>
            <div className="form-group col-12 col-sm-6">
              <label htmlFor="sort">
                Sortuj
              </label>
                <select name="sort" 
                        id="sort" 
                        className="form-control" 
                        onChange={this.handleChange}>
                <option value="id asc">
                  Brak
                </option>
                <option value="name asc">
                  Imię - rosnąco
                </option>
                <option value="name desc">
                  Imię - malejąco
                </option>
              </select>
            </div>
            </div>
        </form>
        {
          isLoaded ? <UserList data={user.users} search={this.state.search} sort={this.state.sort} order={this.state.order} /> : <Loading />
        }
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <Link to="/users/new" className="btn btn-primary">
              Nowy Użytkownik
            </Link>
            <button className="btn btn-warning text-white" onClick={this.handleRefresh}>
              <i className="fas fa-sync-alt"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  const isLoaded = user.isFetched && !user.isFetching;

  return {
    isLoaded: isLoaded,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchUsers: fetchUsers,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);