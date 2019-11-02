import { ToDoItem } from '../../models/todo';

export const TODO_LIST_REQUESTED = 'TODO_LIST_REQUESTED';
interface ToDoListRequested {
  type: typeof TODO_LIST_REQUESTED,
}

export const TODO_LIST_SUCCEEDED = 'TODO_LIST_SUCCEEDED';
interface ToDoListSucceeded {
  type: typeof TODO_LIST_SUCCEEDED,
  toDoList: Array<ToDoItem>,
}

export const TODO_LIST_FAILED = 'TODO_LIST_FAILED';
interface ToDoListFailed {
  type: typeof TODO_LIST_FAILED,
}

export type ToDoListActions = ToDoListRequested | ToDoListSucceeded | ToDoListFailed;
