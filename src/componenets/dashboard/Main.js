function Main() {
  return (
    <section>
      <form>
        <label>Add todo</label>
        <div className="input-wrapper">
          <input placeholder="type todo here..." type="text" />
          <button type="submit">+</button>
        </div>
      </form>
    </section>
  );
}

export default Main;
