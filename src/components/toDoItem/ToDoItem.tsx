import "./ToDoItem.scss";

type ToDoListItemProps = {
  todo: Todo;
  toggleTodo: ToggleTodo;
};

const ToDoItem: React.FC<ToDoListItemProps> = ({ todo, toggleTodo }) => {
  const handleRemoveTask = () => {};

  return (
    <li className="toDo-item">
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default ToDoItem;
