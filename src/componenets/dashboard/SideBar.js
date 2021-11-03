import { useSelector } from "react-redux";
function SideBar() {
  const todos = useSelector((state) => state.user.todos);
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
          <li className={todo.completed ? "complete" : ""}>
            {todo.description}{" "}
          </li>
        ))}
      </ol>
    </aside>
  );
}

export default SideBar;
