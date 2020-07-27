/*
 * @Author: DaiLinBo
 * @Date: 2020-07-16 15:53:29
<<<<<<< HEAD
 * @LastEditTime: 2020-07-25 23:17:07
 * @LastEditors: Aiden
=======
 * @LastEditTime: 2020-07-25 23:22:15
 * @LastEditors: DaiLinBo
>>>>>>> fd4a0a8a7d2874e560c6f5ce48afe7ae322bbd0f
 * @Description: 
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import  "react-app-polyfill/ie11";
// import  "react-app-polufill/stable";
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
