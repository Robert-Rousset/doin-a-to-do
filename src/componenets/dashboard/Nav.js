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
    localStorage.removeItem("SignedIn");
    window.location.reload();
  }
  return (
    <>
      {showModal ? (
        <div className="modal-background" onClick={renderModal}>
          <div className="modal">
            <h1>Settings</h1>
            <h2>name</h2>
            <p>{store.getState().user.name}</p>

            <h2>theme</h2>
          </div>
        </div>
      ) : (
        <> </>
      )}
      <nav>
        <button onClick={renderModal}>Settings</button>
        <h4>Not Another Todo List</h4>
        <button onClick={logout}>logout</button>
      </nav>
    </>
  );
}

export default Nav;
