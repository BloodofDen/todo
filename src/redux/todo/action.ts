import { ToDoItem } from '../../models/todo';

import {
  TODO_LIST_FAILED,
  TODO_LIST_REQUESTED,
  TODO_LIST_SUCCEEDED,
} from './types';

export const ACTION_TODO_LIST_FAILED = () => ({
  type: TODO_LIST_FAILED,
});

export const ACTION_TODO_LIST_REQUESTED = () => ({
  type: TODO_LIST_REQUESTED,
});

export const ACTION_TODO_LIST_SUCCEEDED = (todoList: Array<ToDoItem>) => ({
  type: TODO_LIST_SUCCEEDED,
  todoList,
});
