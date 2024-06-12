type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
type RemoveTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;
