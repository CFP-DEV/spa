import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { selectUser } from '../../store/reducers/user';
import { updateUser, deleteUser } from '../../store/actions/user';

import Alert from '../../components/Alert';

class Profile extends Component {
  state = { name: '', email: '', phone: '', website: '', alert: undefined }

  componentDidMount() {
    const { user } = this.props;
    
    if (user) {
      this.setState({
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { user } = nextProps;

    if (user) {
      this.setState({
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
      });
    }
  }

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { userID } = this.props.match.params;
    const { updateUser } = this.props;

    // Update User
    updateUser(userID, this.state);

    // Show Alert
    this.setState({
      alert: <Alert type="success">{`Edycja użytkownika ${this.state.name} zakończona sukcesem.`}</Alert>,
    })
  }

  handleDelete = (e) => {
    e.preventDefault();
    const { userID } = this.props.match.params;
    const { deleteUser } = this.props;
    
    // Delete User
    deleteUser(userID);

    // Redirect
    this.props.history.push('/users');
  }

  render () {
    if (this.props.user === false) {
      return <Redirect to="/users" />;
    }

    return (
      <div className="profile">
        <button className="btn btn-link text-primary mb-3 p-0" onClick={() => { this.props.history.goBack(); }}>
          <i className="fas fa-long-arrow-alt-left mr-2"></i>
          Powrót
        </button>
        <form className="form p-3 bg-white" onSubmit={this.handleSubmit}>
          { this.state.alert }
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="name">
                Imię i Nazwisko
              </label>
              <input type="text" className="form-control" id="name" name="name" onChange={this.handleChange} value={this.state.name} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="email">
                Adres E-mail
              </label>
              <input type="text" className="form-control" id="email" name="email" onChange={this.handleChange} value={this.state.email} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="phone">
                Numer Telefonu
              </label>
              <input type="text" className="form-control" id="phone" name="phone" onChange={this.handleChange} value={this.state.phone} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="website">
                Strona
              </label>
              <input type="text" className="form-control" id="website" name="website" onChange={this.handleChange} value={this.state.website} />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-reset btn-primary">
              Zaktualizuj
            </button>
            <button type="button" className="btn btn-reset btn-danger" onClick={this.handleDelete}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </form>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateUser: updateUser,
    deleteUser: deleteUser,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);