import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from './components/UserList';

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

  render () {
    const { user } = this.props;

    return (
      <div className="users">
        <div className="row">
          <div className="col-12">
            <header>
              <h2>Użytkownicy</h2>
            </header>
          </div>
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-6">
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
            <div className="form-group col-6">
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
        <UserList data={user.users} search={this.state.search} sort={this.state.sort} order={this.state.order} />
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

export default connect(mapStateToProps)(Users);