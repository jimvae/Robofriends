import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// ./ means it is in the same directory
import thunkMiddleware from 'redux-thunk';

import 'tachyons';
import App from './components/App';
import { searchRobots, requestRobots } from './reducers';

const rootReducer = combineReducers({ searchRobots, requestRobots});
// combine all the reducers

// create the store from the reducer(search Robots)
// you can add more middleware here (ordered by parameter)
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  // state is passed down to every single components of App
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// or 
// using fragments


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
