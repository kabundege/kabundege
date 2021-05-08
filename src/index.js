import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
import App from './routes/routes';
import * as serviceWorker from './serviceWorkerRegistration';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();