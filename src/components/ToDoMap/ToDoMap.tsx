import React from "react";
import ToDoItem from "../toDoItem/ToDoItem";

type ToDoListProps = {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
};
const ToDoMap: React.FC<ToDoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <ToDoItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />;
      })}
    </ul>
  );
};

export default ToDoMap;
