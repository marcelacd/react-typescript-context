export interface DataTodo {
  todos: {
    completed: boolean;
    id: number;
    todo: string;
    userId: number;
  }[];
  total: number;
  skip: number;
  limit: number;
}
