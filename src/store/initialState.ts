import { initialToDoListState } from '../redux/todo/reducer';
import { ToDoList } from '../models/todo'

export interface Store {
  toDoList: ToDoList,
}

const initialState: Store = {
  toDoList: initialToDoListState,
};

export default initialState;
