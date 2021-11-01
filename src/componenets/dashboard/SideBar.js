function SideBar() {
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
        <li>Hang out washing</li>
        <li>do this code assessment</li>
        <li>make a grilled cheese sandwich</li>
        <li>ugh, take the washing back in</li>
        <li>yell at someone online</li>
      </ol>
    </aside>
  );
}

export default SideBar;
