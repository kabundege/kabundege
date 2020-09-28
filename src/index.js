import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
import App from './routes/routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();