import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import offlight from "./Images/offbulb.png";
import onlight from "./Images/onbulb.png";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


let btnOn = document.querySelector(".btnOn");
let btnOff = document.querySelector(".btnOff");
let lightimg = document.querySelector(".lightimg");
let container = document.querySelector('.container');
console.log(container);

btnOn.addEventListener("click", () => {
  lightimg.src = onlight;
});
btnOff.addEventListener("click", () => {
  lightimg.src = offlight;
});