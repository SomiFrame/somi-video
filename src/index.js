import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import Index from './page/layout.js';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
