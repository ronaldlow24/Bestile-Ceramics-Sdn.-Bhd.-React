import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <>
    <Header />
    <App />
  </>,
  document.getElementById('root')
);

