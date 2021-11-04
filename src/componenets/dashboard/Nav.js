import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeName, changeTheme } from "../../redux/todoSlice";
import store from "../../redux/store";

function Nav() {
  const theme = localStorage.getItem("theme");

  const [username, setUsername] = useState();
  const [showModal, setShowModal] = useState();

  const dispatch = useDispatch();

  function renderModal() {
    setShowModal(!showModal);
  }

  function logout() {
    localStorage.removeItem("signedIn");
    localStorage.removeItem("username");
    window.location.pathname = "/doin-a-to-do";
  }

  function changeTheTheme(event) {
    event.preventDefault();
    const themeName = event.target.textContent;
    if (themeName === "Default") {
      localStorage.setItem("theme", "default");
      dispatch(changeTheme({ theme: "default" }));
      document.getElementById("2").className = "theme-button-dark";
    }
    if (themeName === "Dark") {
      localStorage.setItem("theme", "dark");
      dispatch(changeTheme({ theme: "dark" }));
      document.getElementById("1").className = "theme-button-default";
    }
  }

  function resetButtons(themeName) {}

  function changeUsername() {
    localStorage.setItem("username", username);
    dispatch(changeName({ name: username }));
    renderModal();
  }

  function stopPropagate(event) {
    event.stopPropagation();
  }

  return (
    <>
      {showModal ? (
        <div className="modal-background" onClick={renderModal}>
          <form onSubmit={changeUsername}>
            <div className="modal" onClick={stopPropagate}>
              <h1>Settings</h1>
              <h2>Username</h2>
              <input
                placeholder={localStorage.getItem("username")}
                onChange={(event) => setUsername(event.target.value)}
              />

              <h2>Theme</h2>
              <div className="button-container">
                <button
                  id="1"
                  className={
                    theme === "default" ? "active" : "theme-button-default"
                  }
                  onClick={changeTheTheme}
                >
                  Default
                </button>
                <button
                  id="2"
                  className={theme === "dark" ? "active" : "theme-button-dark"}
                  onClick={changeTheTheme}
                >
                  Dark
                </button>
              </div>
              <button type="submit" className="modal-button">
                Confirm
              </button>
            </div>
          </form>
        </div>
      ) : (
        <> </>
      )}
      <nav>
        <button onClick={renderModal}>Settings</button>
        <span className="full-title">Not Another Todo List</span>
        <span className="short-title">Todo List</span>
        <button onClick={logout}>logout</button>
      </nav>
    </>
  );
}

export default Nav;
