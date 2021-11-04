import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import store from "../../redux/store";

function AddTodo() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(addTodo({ description: todo }));
  };

  return (
    <section>
      <label>ADD TODO</label>
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <div className="input-background">
            <input
              className="todoInput"
              placeholder="type todo here..."
              type="text"
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
            />
          </div>
          <button type="submit">+</button>
        </div>
      </form>
    </section>
  );
}

export default AddTodo;
