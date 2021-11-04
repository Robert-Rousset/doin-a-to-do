// import Settings from "./Settings";
import { useState } from "react";
import store from "../../redux/store";

function Nav() {
  const [showModal, setShowModal] = useState();
  function renderModal(event) {
    event.stopPropagation();
    setShowModal(!showModal);
  }

  function logout() {
    localStorage.removeItem("signedIn");
    window.location.reload();
  }
  return (
    <>
      {showModal ? (
        <div className="modal-background" onClick={renderModal}>
          <div className="modal">
            <h1>Settings</h1>
            <h2>name</h2>
            <input />
            <p>{store.getState().user.name}</p>
            <h2>theme</h2>
            <div className="button-container">
              <button className="theme-button-default">Default</button>{" "}
              <button className="theme-button-dark">Dark</button>
            </div>
            <button className="modal-button">Confirm</button>
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
