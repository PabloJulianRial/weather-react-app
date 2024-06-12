import "./ToDoItem.scss";

type ToDoListItemProps = {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
};

const ToDoItem: React.FC<ToDoListItemProps> = ({
  todo,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <div className="toDo-item">
      <li className="toDo-item__li">
        <label className={todo.complete ? "complete" : undefined}>
          <input
            className="toDo-item__input"
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo)}
          />
          {todo.text}
        </label>
      </li>
      <p className="toDo-item__p" onClick={() => removeTodo(todo)}>
        🗑
      </p>
    </div>
  );
};

export default ToDoItem;
