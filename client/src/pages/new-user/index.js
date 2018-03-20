import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser } from '../../store/actions/user';

class NewUser extends Component {
  state = { name: '', email: '', phone: '', address: '' }

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { createUser } = this.props;

    if (this.state.name && this.state.email && this.state.phone && this.state.address) {
      // Create User
      createUser(this.state);

      // Clear Form
      this.setState({
        name: '',
        email: '',
        phone: '',
        address: '',
      });
    }
  }

  render () {
    return (
      <div className="new-user">
        <form className="form" onSubmit={this.handleSubmit}>
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
                Adres Zamieszkania
              </label>
              <input type="text" className="form-control" id="address" name="address" onChange={this.handleChange} value={this.state.address} />
            </div>
          </div>
          <button className="btn btn-reset btn-primary">
            Stwórz
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createUser: createUser,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewUser);