import { ToDoList } from '../../models/todo'
import { ToDoListActions } from './types'

import {
  TODO_LIST_FAILED,
  TODO_LIST_REQUESTED,
  TODO_LIST_SUCCEEDED,
} from './types';

export const initialToDoListState: ToDoList = {
  items: [],
  isFetching: false,
};

const todoList = (
  state: ToDoList = initialToDoListState,
  action: ToDoListActions,
): ToDoList => {
  switch (action.type) {
    case TODO_LIST_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case TODO_LIST_FAILED:
      return {
        ...state,
        isFetching: false,
      };
    case TODO_LIST_SUCCEEDED: {
      const { todoList: items } = action;

      return {
        ...state,
        items,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

export default todoList;
