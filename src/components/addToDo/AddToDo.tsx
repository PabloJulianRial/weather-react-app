import { ChangeEvent, FormEvent, useState } from "react";
import "./AddToDo.scss";

type AddToDoprops = {
  addTodo: AddTodo;
};

const AddToDo = ({ addTodo }: AddToDoprops) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div className="add-todo">
      <h3 className="add-todo__head">Lets do it..</h3>
      <form className="add-todo__form">
        <input
          className="add-todo__input"
          type="text"
          value={newTodo}
          onChange={handleChange}
        />
        <button
          className="add-todo__button"
          type="submit"
          onClick={handleSubmit}
        >
          +
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
