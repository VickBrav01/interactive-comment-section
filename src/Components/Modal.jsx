/* eslint-disable react/prop-types */
import React from "react";
import { AppContext } from "../context";
const Modal = ({ setIsModalOpen, checkUserReply, commentId }) => {
  const { handleDelete } = React.useContext(AppContext);
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Delete Comment</h3>
        <p>
          Are you sure you want t delete this comment? This will remove the
          comment ad cant be undone.
        </p>
        <div className="modal-buttons">
          <button className="btn cancel" onClick={() => setIsModalOpen(false)}>
            no,cancel
          </button>
          <button
            className="btn delete"
            onClick={() => handleDelete(commentId, checkUserReply)}
          >
            yes,delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;