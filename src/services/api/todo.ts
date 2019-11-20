import createInstance from '../createCustomInstance';
import { toDoListFromServer, toDoItemToServer } from '../../helpers/apiMapping';

import { ToDoItem } from '../../models/todo.d';

const API = createInstance();

export const getToDoList = () => API
  .get('/todos')
  .then(({ data: toDoList }: any): ToDoItem[] => toDoListFromServer(toDoList))
  .catch((error: any) => {
    throw error;
  });

export const addToDoItem = (newToDoItem: ToDoItem) => API
  .post(
    '/todos',
    toDoItemToServer(newToDoItem),
  )
  .then(({ data: newId }: any): number => newId)
  .catch((error: any) => {
    throw error;
  });

export const editToDoItem = (updatedToDoItem: ToDoItem) => API
  .put(
    `/todos/${updatedToDoItem.id}`,
    toDoItemToServer(updatedToDoItem),
  )
  .catch((error: any) => {
    throw error;
  });

export const deleteToDoItem = (itemId: number) => API
  .delete(`/todos/${itemId}`)
  .catch((error: any) => {
    throw error;
  });
