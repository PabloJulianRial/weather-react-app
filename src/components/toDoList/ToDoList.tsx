import { useState } from "react";
import "./ToDoList.scss";
import ToDoMap from "../ToDoMap/ToDoMap";
import AddToDo from "../addToDo/AddToDo";

const ToDoList = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const removeTodo: RemoveTodo = (selectedTodo) => {
    const newTodos = [...todos];
    newTodos.splice(todos.indexOf(selectedTodo), 1);
    setTodos(newTodos);
  };

  const addTodo = (newTodo: string) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  return (
    <div className="todo-list">
      <AddToDo addTodo={addTodo} />
      <ToDoMap todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default ToDoList;
