import { ToDoItem } from '../../../models/todo';

export interface IProps {
  classes: {
    [props: string]: any,
  },
  item: ToDoItem,
  order: number,
  onItemCheck: (itemId: number) => void,
  onItemDelete: (itemId: number) => void,
};
