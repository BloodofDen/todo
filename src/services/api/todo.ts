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
    { data: toDoItemToServer(newToDoItem) },
  )
  .then(({ data: newId }: any): number => newId)
  .catch((error: any) => {
    throw error;
  });

export const editToDoItem = (updatedToDoItem: ToDoItem) => API
  .put(
    `/todos/${updatedToDoItem.id}`,
    { data: toDoItemToServer(updatedToDoItem) },
  )
  .catch((error: any) => {
    throw error;
  });

export const deleteToDoItem = (toDoItemId: number) => API
  .delete(`/todos/${toDoItemId}`)
  .catch((error: any) => {
    throw error;
  });
