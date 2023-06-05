import { useState } from "react";
import Modal from "./Modal.js";
import Backdrop from "./Backdrop.js";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? <Modal /> : null}

      <Backdrop />
    </div>
  );
}

export default Todo;
