import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import UserTemplate from '../user/index';

class Main extends Component {
  render () {
    return (
      <div className="main">
        <div className="container">
        
        <Switch>
          <Route path="/users" component={UserTemplate} />
        </Switch>

        </div>
      </div>
    );
  }
}

export default Main;