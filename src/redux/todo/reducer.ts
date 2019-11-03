import { ToDoList } from '../../models/todo'
import { ToDoListActions } from './types'

import {
  TODO_LIST_FAILED,
  TODO_LIST_REQUESTED,
  TODO_LIST_SUCCEEDED,
  ADD_TODO_ITEM_REQUESTED,
  ADD_TODO_ITEM_FULFILLED,
  EDIT_TODO_ITEM_REQUESTED,
  DELETE_TODO_ITEM_REQUESTED,
} from './types';

export const initialToDoListState: ToDoList = {
  items: [],
  isFetching: false,
};

const toDoList = (
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
      const { toDoList: items } = action;

      return {
        ...state,
        items,
        isFetching: false,
      };
    }
    case ADD_TODO_ITEM_REQUESTED: {
      const { newToDoItem } = action;
      const { items, ...restState } = state;

      return {
        ...restState,
        items: [
          newToDoItem,
          ...items,
        ],
      };
    }
    case ADD_TODO_ITEM_FULFILLED: {
      const { index, newId } = action;
      const { items, ...restState } = state;

      return {
        ...restState,
        items: [
          ...items.slice(0, index),
          {
            ...items[index],
            id: newId,
          },
          ...items.slice(index + 1),
        ],
      };
    }
    case EDIT_TODO_ITEM_REQUESTED: {
      const { index, updatedToDoItem } = action;
      const { items, ...restState } = state;

      return {
        ...restState,
        items: [
          ...items.slice(0, index),
          updatedToDoItem,
          ...items.slice(index + 1),
        ],
      };
    }
    case DELETE_TODO_ITEM_REQUESTED: {
      const { index } = action;
      const { items, ...restState } = state;

      return {
        ...restState,
        items: [
          ...items.slice(0, index),
          ...items.slice(index + 1),
        ],
      };
    }
    default:
      return state;
  }
};

export default toDoList;
