import { ToDoItem, ToDoItemServer,  } from '../models/todo';

export const toDoListFromServer = (toDoList: ToDoItemServer[]): ToDoItem[] => {
  return toDoList.map(({ is_done, created_at, ...restList }) => ({
    ...restList,
    isDone: is_done,
    createdAt: created_at,
  }));
};

export const toDoItemToServer = ({ isDone, createdAt, ...restItem }: ToDoItem): ToDoItemServer => ({
  ...restItem,
  is_done: isDone,
  created_at: createdAt,
});
