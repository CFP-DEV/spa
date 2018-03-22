import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';

import Home from '../../pages/home/index';

import UserTemplate from '../user/index';

class Main extends Component {
  render () {
    return (
      <div className="main">
        <Navigation />

        <div className="main-content pt-5 pb-5">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/users" component={UserTemplate} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;