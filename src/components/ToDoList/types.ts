import { ToDoItem } from '../../models/todo';

export interface IProps {
  classes: {
    [props: string]: any,
  },
  todos: ToDoItem[],
  ACTION_TODO_LIST_REQUESTED: () => void,
  ACTION_ADD_TODO_ITEM_REQUESTED: (text: string) => void,
  ACTION_EDIT_TODO_ITEM_REQUESTED: (updatedToDoItem: ToDoItem) => void,
  ACTION_DELETE_TODO_ITEM_REQUESTED: (itemId: number) => void,
};

export interface IState {
  value: string,
};
