import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Notify } from 'react-redux-notify';
import { CssBaseline } from '@material-ui/core';

import store from './store/store';

import ToDoList from './components/ToDoList';
import * as serviceWorker from './serviceWorker';

import './normalize.css';
import 'react-redux-notify/dist/ReactReduxNotify.css';

const Root = (
  <Provider store={store}>
    <CssBaseline />
    <ToDoList />
    <Notify />
  </Provider>
);

const MOUNT_NODE = document.getElementById('app') as HTMLElement;

ReactDOM.render(Root, MOUNT_NODE);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
