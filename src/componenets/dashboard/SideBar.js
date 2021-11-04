import { useSelector, useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../redux/todoSlice";
import store from "../../redux/store";

function SideBar() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.user.todos);
  function completeTheTodo(id) {
    dispatch(completeTodo({ id: id }));
  }
  function deleteTheTodo(id) {
    dispatch(deleteTodo({ id: id }));
  }

  return (
    <aside>
      <label htmlFor="select-status" className="aside-label">
        TODOS
      </label>
      <select name="select-status" id="status">
        <option value="both">All Todos</option>
        <option value="completed">Completed</option>
        <option value="todo">TODO :'(</option>
      </select>

      <ol>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "complete" : ""}>
            {todo.description}{" "}
            {todo.completed ? (
              <button
                className="delete-todo-button"
                onClick={() => deleteTheTodo(todo.id)}
              ></button>
            ) : (
              <button
                className="complete-todo-button"
                onClick={() => completeTheTodo(todo.id)}
              ></button>
            )}
          </li>
        ))}
      </ol>
    </aside>
  );
}

export default SideBar;
