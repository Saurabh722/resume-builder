import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Resume from './resume';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Resume />, document.getElementById('root'));

// If you want your Resume to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
