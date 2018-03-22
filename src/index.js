import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Root from './config/Root';

import store from './store/index';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
