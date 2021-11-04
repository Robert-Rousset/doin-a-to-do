import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/todoSlice";

function SignIn() {
  const [username, setUsername] = useState();
  const [errorMessage, setErrorMessage] = useState("hidden");

  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    if (!username || username.length < 4) {
      setErrorMessage("show");
      setTimeout(() => {
        setErrorMessage("hidden");
      }, 5000);
    } else if (username.length >= 4) {
      dispatch(signIn({ name: username, signedIn: true }));
      localStorage.setItem("signedIn", true);
      localStorage.setItem("username", username);
      localStorage.setItem("theme", "default");
      window.location.pathname = "/doin-a-to-do";
    }
  }

  return (
    <form className="sign-in-form" onSubmit={onSubmit}>
      <label>Username:</label>
      <input
        placeholder="4+ characters"
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <p className={errorMessage}>
        Please enter a username with 4 or more characters{" "}
      </p>

      <button className="sign-in-button" type="submit">
        login
      </button>
    </form>
  );
}

export default SignIn;
