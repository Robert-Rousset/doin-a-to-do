function Signin() {
  return (
    <form>
      <div className="input-wrapper">
        <label>name</label>
        <input placeholder="4+ characters" type="text" />
      </div>
      <button type="submit">login</button>
    </form>
  );
}

export default Signin;
