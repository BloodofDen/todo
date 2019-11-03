import uuid from 'uuid/v4';
import store from '../../store/store';

import { ToDoItem } from '../../models/todo';

import {
  TODO_LIST_FAILED,
  TODO_LIST_REQUESTED,
  TODO_LIST_SUCCEEDED,
  ADD_TODO_ITEM_REQUESTED,
  ADD_TODO_ITEM_FULFILLED,
  EDIT_TODO_ITEM_REQUESTED,
  DELETE_TODO_ITEM_REQUESTED,
} from './types';

export const ACTION_TODO_LIST_FAILED = () => ({
  type: TODO_LIST_FAILED,
});

export const ACTION_TODO_LIST_REQUESTED = () => ({
  type: TODO_LIST_REQUESTED,
});

export const ACTION_TODO_LIST_SUCCEEDED = (toDoList: ToDoItem[]) => ({
  type: TODO_LIST_SUCCEEDED,
  toDoList,
});

export const ACTION_ADD_TODO_ITEM_REQUESTED = (text: string) => ({
  type: ADD_TODO_ITEM_REQUESTED,
  newToDoItem: {
    id: uuid(),
    text,
    isDone: false,
    createdAt: new Date().toJSON(),
  },
});

export const ACTION_ADD_TODO_ITEM_FULFILLED = (oldId: string, newId: number) => {
  const { toDoList: { items: todos } } = store.getState();
  const index = todos.findIndex(todo => todo.id === oldId);

  return {
    type: ADD_TODO_ITEM_FULFILLED,
    index,
    newId,
  };
};

export const ACTION_EDIT_TODO_ITEM_REQUESTED = (updatedToDoItem: ToDoItem) => {
  const { toDoList: { items: todos } } = store.getState();
  const index = todos.findIndex(todo => todo.id === updatedToDoItem.id);

  return {
    type: EDIT_TODO_ITEM_REQUESTED,
    index,
    updatedToDoItem,
  };
};

export const ACTION_DELETE_TODO_ITEM_REQUESTED = (toDoItemId: number) => {
  const { toDoList: { items: todos } } = store.getState();
  const index = todos.findIndex(todo => todo.id === toDoItemId);

  return {
    type: DELETE_TODO_ITEM_REQUESTED,
    index,
    toDoItemId,
  };
};
