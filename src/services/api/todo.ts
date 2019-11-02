import createInstance from '../createCustomInstance';
import { ToDoItem } from '../../models/todo.d';

const API = createInstance();

export const getToDoList = () => API
  .get('/todos')
  .then(({ data: { todoList } }: any): Array<ToDoItem> => todoList)
  .catch((error: any) => {
    throw error;
  });

export default {
  getToDoList,
};
