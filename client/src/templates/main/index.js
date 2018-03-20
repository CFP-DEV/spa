import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';

import Home from '../../pages/home/index';

import UserTemplate from '../user/index';

class Main extends Component {
  render () {
    return (
      <div className="main">
        <div className="container">
          <Navigation />
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={UserTemplate} />
          </Switch>

        </div>
      </div>
    );
  }
}

export default Main;