import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import './app/assets/styles/reset_styles.css';
import './app/assets/styles/index.css';


import App from './app/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
