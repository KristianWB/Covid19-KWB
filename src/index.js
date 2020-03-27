import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let countryList = [
  {"name": "Denmark", "confirmed": 2000, "hospitalized": 250, "dead": 52},
  {"name": "Sweden", "confirmed": 0, "hospitalized": 500, "dead": 100},
  {"name": "Norway", "confirmed": 1500, "hospitalized": 350, "dead": 75},
  {"name": "Finland", "confirmed": 0, "hospitalized": 0, "dead": -5}
]

ReactDOM.render(
  <React.StrictMode>
    <App countries={countryList}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
