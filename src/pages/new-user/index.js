import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser } from '../../store/actions/user';

import Alert from '../../components/Alert';

class NewUser extends Component {
  state = { name: '', email: '', phone: '', website: '', alerts: [] }

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { createUser } = this.props;

    if (this.state.name && this.state.email && this.state.phone && this.state.website) {
      // User Object
      let user = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        website: this.state.website
      }

      // Create User
      createUser(user);

      // Clear Form
      this.setState({
        name: '',
        email: '',
        phone: '',
        website: '',
        alerts: [{ type: 'success', content: `Stworzyłeś użytkownika z nazwą ${user.name}.` }]
      });
    } else {
      this.setState({
        alerts: [{type: 'warning', content: 'Wszystkie pola muszą zostać wypełnione'}],
      })
    }
  }

  render () {
    const alerts = this.state.alerts.map(alert => <Alert key={alert.content} type={alert.type}>{alert.content}</Alert>)

    return (
      <div className="new-user">
        <button className="btn btn-link text-primary mb-3 p-0" onClick={() => { this.props.history.goBack(); }}>
          <i className="fas fa-long-arrow-alt-left mr-2"></i>
          Powrót
        </button>
        <form className="form p-3 bg-white" onSubmit={this.handleSubmit}>
          { alerts }
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