import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/todoSlice";

function SignIn() {
  const [username, setUsername] = useState();

  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    if (username.length > 4) {
      dispatch(signIn({ name: username, signedIn: true }));
      localStorage.setItem("SignedIn", true);
      window.location.pathname = "/dashboard";
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="input-wrapper">
        <label>name</label>
        <input
          placeholder="4+ characters"
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );
}

export default SignIn;
