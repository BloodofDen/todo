import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import { getToDoList } from '../../services/api/todo';

import { TODO_LIST_REQUESTED } from './types';

import { ACTION_TODO_LIST_SUCCEEDED } from './action';
import { ACTION_NOTIFICATION_ERROR } from '../notifications/action';

function* getToDoListSaga() {
  try {
    const toDoList = yield call(getToDoList);

    yield put(ACTION_TODO_LIST_SUCCEEDED(toDoList));
  } catch (error) {
    const { response, message } = error;
    const errorMessage = response ? response.statusText : message;

    yield put(ACTION_NOTIFICATION_ERROR(errorMessage));
  }
}

function* toDoListSaga() {
  yield all([
    takeLatest(TODO_LIST_REQUESTED, getToDoListSaga),
  ]);
}

export default toDoListSaga;
