interface ToDoItemBase {
  id?: number | string | null,
  text: string,
}

export interface ToDoItemServer extends ToDoItemBase {
  is_done: boolean,
  created_at: string,
}

export interface ToDoItem extends ToDoItemBase {
  isDone: boolean,
  createdAt: string,
}

export interface ToDoList {
  items: ToDoItem[],
  isFetching: boolean,
}
