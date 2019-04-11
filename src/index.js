import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppHooks from './AppHooks';

ReactDOM.render(<AppHooks />, document.getElementById('root'));
serviceWorker.unregister();
