import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// ./ means it is in the same directory
// import App from './App';
// if you never put .something, it assumes that it is JS
// import reportWebVitals from './reportWebVitals';
// import Hello from './Hello';
// import Card from './Card';
// import CardList from './CardList';
import 'tachyons';
// import { robots } from './robots';
import App from './App';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
// <CardList robots={robots} />,
//   document.getElementById('root')
// );

ReactDOM.render(
<App />,
  document.getElementById('root')
);

// or 
// using fragments


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
