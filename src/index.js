import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Navbar from './Navbar'
import * as serviceWorker from './serviceWorker';
import Home from './Home';
import About from './About';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar/>
    <Home/>
    <About/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
