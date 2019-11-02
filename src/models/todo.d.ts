export interface ToDoItem {
  id: number | null,
  text: string,
  isDone: boolean,
  createdAt: string,
}

export interface ToDoList {
  items: Array<ToDoItem>,
  isFetching: boolean,
}
