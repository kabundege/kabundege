import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './routes/routes';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));
