import { useState } from "react";
import "./ToDoList.scss";
import React from "react";
import ToDoMap from "../ToDoMap/ToDoMap";

const initialTodos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "do the shopping", complete: false },
];

const ToDoList = () => {
  const [todos, setTodos] = useState(initialTodos);

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

  return (
    <div className="todo-list">
      <React.Fragment>
        <ToDoMap todos={todos} toggleTodo={toggleTodo} />
      </React.Fragment>
    </div>
  );
};

export default ToDoList;
