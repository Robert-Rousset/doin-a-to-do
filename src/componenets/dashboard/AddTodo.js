import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";

function AddTodo() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(addTodo({ description: todo }));
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <label>Add todo</label>
        <div className="input-wrapper">
          <input
            placeholder="type todo here..."
            type="text"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
          <button type="submit">+</button>
        </div>
      </form>
    </section>
  );
}

export default AddTodo;
