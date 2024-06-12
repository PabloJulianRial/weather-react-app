import React from "react";
import ToDoItem from "../toDoItem/ToDoItem";

type ToDoListProps = {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
};
const ToDoMap: React.FC<ToDoListProps> = ({
  todos,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <ToDoItem
            key={todo.text}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
};

export default ToDoMap;
