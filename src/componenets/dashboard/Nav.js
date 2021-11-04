import { useState } from "react";
import store from "../../redux/store";

function Nav() {
  const theme = localStorage.getItem("theme");
  const [showModal, setShowModal] = useState();
  function renderModal() {
    setShowModal(!showModal);
  }

  function logout() {
    localStorage.removeItem("signedIn");
    localStorage.removeItem("username");
    window.location.pathname = "/doin-a-to-do/signin";
  }

  function changeTheme(event) {
    const themeName = event.target.innerHTML;
    console.log(themeName);
    if (themeName === "Default") {
      localStorage.setItem("theme", "default");
    }
    if (themeName === "Dark") {
      localStorage.setItem("theme", "dark");
    }
  }

  function stopPropagate(event) {
    event.stopPropagation();
  }

  return (
    <>
      {showModal ? (
        <div className="modal-background" onClick={renderModal}>
          <div className="modal" onClick={stopPropagate}>
            <h1>Settings</h1>
            <h2>Username</h2>
            <input placeholder={localStorage.getItem("username")} />

            <h2>Theme</h2>
            <div className="button-container">
              <button
                className={
                  theme === "default" ? "active" : "theme-button-default"
                }
                onClick={changeTheme}
              >
                Default
              </button>
              <button
                className={theme === "dark" ? "active" : "theme-button-dark"}
                onClick={changeTheme}
              >
                Dark
              </button>
            </div>
            <button className="modal-button" onClick={renderModal}>
              Confirm
            </button>
          </div>
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
