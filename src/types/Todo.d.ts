type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
type RemoveTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;
type Events = {
  name: string;
  dates: {
    start: {
      dateTime: string;
      localDate: string;
    };
  };
  priceRanges?: {
    min: number;
  }[];
  _embedded: {
    venues: {
      name: string;
    }[];
  };
};
