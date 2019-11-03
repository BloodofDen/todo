import { ToDoItem } from '../../models/todo';

export const TODO_LIST_REQUESTED = 'TODO_LIST_REQUESTED';
interface ToDoListRequested {
  type: typeof TODO_LIST_REQUESTED,
}

export const TODO_LIST_SUCCEEDED = 'TODO_LIST_SUCCEEDED';
interface ToDoListSucceeded {
  type: typeof TODO_LIST_SUCCEEDED,
  toDoList: ToDoItem[],
}

export const TODO_LIST_FAILED = 'TODO_LIST_FAILED';
interface ToDoListFailed {
  type: typeof TODO_LIST_FAILED,
}

export const ADD_TODO_ITEM_REQUESTED = 'ADD_TODO_ITEM_REQUESTED';
export interface AddToDoItemRequested {
  type: typeof ADD_TODO_ITEM_REQUESTED,
  newToDoItem: ToDoItem,
}

export const ADD_TODO_ITEM_FULFILLED = 'ADD_TODO_ITEM_FULFILLED';
interface AddToDoItemFulfilled {
  type: typeof ADD_TODO_ITEM_FULFILLED,
  index: number,
  newId: number,
}

export const EDIT_TODO_ITEM_REQUESTED = 'EDIT_TODO_ITEM_REQUESTED';
export interface EditToDoItemFulfilled {
  type: typeof EDIT_TODO_ITEM_REQUESTED,
  index: number,
  updatedToDoItem: ToDoItem,
}

export const DELETE_TODO_ITEM_REQUESTED = 'DELETE_TODO_ITEM_REQUESTED';
export interface DeleteToDoItemRequested {
  type: typeof DELETE_TODO_ITEM_REQUESTED,
  index: number,
  toDoItemId: number,
}

export type ToDoListActions = ToDoListRequested |
  ToDoListSucceeded | ToDoListFailed | AddToDoItemRequested |
  AddToDoItemFulfilled | EditToDoItemFulfilled | DeleteToDoItemRequested;
