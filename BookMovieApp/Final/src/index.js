import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Homepage from './screens/home/Home';

//import Controller from './screens/Controller';

// ReactDOM.render(<Controller />, document.getElementById('root'));
 registerServiceWorker();

 ReactDOM.render(<Homepage />, document.getElementById('root'));
 registerServiceWorker();
