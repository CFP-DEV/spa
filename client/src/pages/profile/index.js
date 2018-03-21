import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectUser } from '../../store/reducers/user';
import { updateUser, deleteUser } from '../../store/actions/user';

class Profile extends Component {
  state = { name: '', email: '', phone: '', address: '', alerts: [] }

  componentDidMount() {
    const { user } = this.props;
    
    if (user) {
      this.setState({
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
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
        address: user.address,
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

    updateUser(userID, this.state);
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
    return (
      <div className="profile">
        <button className="btn btn-link text-primary mb-3 p-0" onClick={() => { this.props.history.goBack(); }}>
          <i className="fas fa-long-arrow-alt-left mr-2"></i>
          Powrót
        </button>
        <form className="form p-3 bg-white" onSubmit={this.handleSubmit}>
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
              <label htmlFor="address">
                Adres
              </label>
              <input type="text" className="form-control" id="address" name="address" onChange={this.handleChange} value={this.state.address} />
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