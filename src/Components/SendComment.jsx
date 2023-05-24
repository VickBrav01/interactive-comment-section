/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { AppContext } from "../context";
const SendComment = ({
  user,
  setIsReplying,
  parentUser,
  commentType,
  setIsEditing,
  checkUserReply,
  commentId,
}) => {
  const { currentUser, handleReply, handleComment, handleEdit } =
    React.useContext(AppContext);
  const [reply, setReply] = useState(user ? `@${user} ` : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reply === "") return;
    if (commentType === "send") handleComment(reply);
    if (commentType === "reply") {
      handleReply(reply, parentUser || user);
      setIsReplying && setIsReplying(false);
    }
    if (commentType === "update") {
      handleEdit(commentId, checkUserReply, reply);
      setIsEditing && setIsEditing(false);
    }
  };

  return (
    <div className="send-area">
      <img
        src={currentUser.image.webp}
        alt="user"
        className="profile-img current-user-img"
      />
      <textarea
        name="comment"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        id="sendcomment"
        placeholder="Add a comment..."
      ></textarea>
      <button className="send-button" onClick={(e) => handleSubmit(e)}>
        {commentType || "send"}
      </button>
    </div>
  );
};

export default SendComment;