import React from "react";
import { AppContext } from "../context";
import CommentAndReplies from "./CommentAndReplies";
const Comments = () => {
  const { comments } = React.useContext(AppContext);

  return (
    <div className="comments">
      {comments.map((comment) => {
        return <CommentAndReplies key={comment.id} {...comment} />;
      })}
    </div>
  );
};

export default Comments;