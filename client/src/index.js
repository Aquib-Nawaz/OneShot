import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import { BrowserRouter } from "react-router-dom";

import "./assets/css/animate.min.css";
import "./assets/css/demo.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App /></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

