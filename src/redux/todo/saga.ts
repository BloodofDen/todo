import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import {
  getToDoList,
  addToDoItem,
  editToDoItem,
  deleteToDoItem,
} from '../../services/api/todo';

import {
  AddToDoItemRequested,
  EditToDoItemFulfilled,
  DeleteToDoItemRequested,
  TODO_LIST_REQUESTED,
  ADD_TODO_ITEM_REQUESTED,
  EDIT_TODO_ITEM_REQUESTED,
  DELETE_TODO_ITEM_REQUESTED,
} from './types';

import {
  ACTION_TODO_LIST_FAILED,
  ACTION_TODO_LIST_SUCCEEDED,
  ACTION_ADD_TODO_ITEM_FULFILLED
} from './action';
import { ACTION_NOTIFICATION_ERROR } from '../notifications/action';

function* getToDoListSaga() {
  try {
    const toDoList = yield call(getToDoList);

    yield put(ACTION_TODO_LIST_SUCCEEDED(toDoList));
  } catch (error) {
    const { response, message } = error;
    const errorMessage = response ? response.statusText : message;

    yield put(ACTION_TODO_LIST_FAILED());
    yield put(ACTION_NOTIFICATION_ERROR(errorMessage));
  }
}

function* addToDoItemSaga(action: AddToDoItemRequested) {
  try {
    const { id: oldId, ...restToDoItem } = action.newToDoItem;
    const newId = yield call(addToDoItem, restToDoItem);

    yield put(ACTION_ADD_TODO_ITEM_FULFILLED(oldId as string, newId));
  } catch (error) {
    const { response, message } = error;
    const errorMessage = response ? response.statusText : message;

    yield put(ACTION_NOTIFICATION_ERROR(errorMessage));
  }
}

function* editToDoItemSaga(action: EditToDoItemFulfilled) {
  try {
    yield call(editToDoItem, action.updatedToDoItem);
  } catch (error) {
    const { response, message } = error;
    const errorMessage = response ? response.statusText : message;

    yield put(ACTION_NOTIFICATION_ERROR(errorMessage));
  }
}

function* deleteToDoItemSaga(action: DeleteToDoItemRequested) {
  try {
    yield call(deleteToDoItem, action.toDoItemId);
  } catch (error) {
    const { response, message } = error;
    const errorMessage = response ? response.statusText : message;

    yield put(ACTION_NOTIFICATION_ERROR(errorMessage));
  }
}

export default function* toDoListSaga() {
  yield all([
    takeLatest(TODO_LIST_REQUESTED, getToDoListSaga),
    takeLatest(ADD_TODO_ITEM_REQUESTED, addToDoItemSaga),
    takeLatest(EDIT_TODO_ITEM_REQUESTED, editToDoItemSaga),
    takeLatest(DELETE_TODO_ITEM_REQUESTED, deleteToDoItemSaga),
  ]);
}
