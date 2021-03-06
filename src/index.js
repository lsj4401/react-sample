import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import opener from './reducers/Reducers';
import { Provider } from 'react-redux';

import App from './App';

// 스토어 생성
const store = createStore(opener);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// https://reactstrap.github.io/components/buttons/ bootstrap
