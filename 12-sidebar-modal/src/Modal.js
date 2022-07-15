import React from "react";
import { FaTimes } from "react-icons/fa";
import { useOrigContext } from "./context";

const Modal = () => {
  const { isModalOpen, openModal, closeModal } = useOrigContext();

  return (
    <>
      <button className="btn" onClick={() => openModal()}>
        Show Modal
      </button>
      <div
        className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}
      >
        <div className="modal-container">
          <FaTimes className="close-modal-btn" onClick={() => closeModal()} />
          <h3>Modal Content</h3>
        </div>
      </div>
    </>
  );
};

export default Modal;
