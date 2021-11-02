import { useSelector } from "react-redux";
function SideBar() {
  const todos = useSelector((state) => state.todos);
  return (
    <aside>
      <div>
        <label htmlFor="select-status">TODOS</label>
        <select name="select-status" id="status">
          <option value="completed">Completed</option>
          <option value="todo">TODO :'(</option>
          <option value="both">All Todos</option>
        </select>
      </div>
      <ol>
        {todos.map((todo) => (
          <li>
            {todo.description} <span>{todo.completed}</span>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export default SideBar;
