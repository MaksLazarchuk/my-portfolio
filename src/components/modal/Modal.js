import React from "react";
import "./Modal.css";
import paperPlane from "../../media/paper-plane.png";

const Modal = function () {
  return (
    <div className="modal">
      <div className="box-input">
        <input
          className="input-modal input-name"
          type="name"
          name="name"
          placeholder="NAME"
        />
        <input
          className="input-modal input-email"
          type="email"
          name="email"
          placeholder="EMAIL"
        />
        <textarea
          className="input-modal input-text"
          type="text"
          name="text"
          placeholder="MESSAGE"
        />
        <button className="button-input">
          <img className="paper-plane" src={paperPlane} alt="paperPlane" />
          SEND
        </button>
      </div>
    </div>
  );
};

export default Modal;
