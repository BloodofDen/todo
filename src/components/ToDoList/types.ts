import { ToDoItem } from '../../models/todo';

export interface IProps {
  classes: {
    [props: string]: any,
  },
  todos: Array<ToDoItem>,
  ACTION_TODO_LIST_REQUESTED: () => void,
};

export interface IState {
  value: string,
};
