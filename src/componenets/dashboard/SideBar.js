import { useSelector } from "react-redux";
function SideBar() {
  const todos = useSelector((state) => state.user.todos);
  return (
    <aside>
      <div>
        <label htmlFor="select-status">TODOS</label>
        <select name="select-status" id="status">
          <option value="both">All Todos</option>
          <option value="completed">Completed</option>
          <option value="todo">TODO :'(</option>
        </select>
      </div>
      <ol>
        {todos.map((todo) => (
          <li>
            {todo.description}{" "}
            <span>{todo.completed ? <span>TICK</span> : ""}</span>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export default SideBar;
