import Comment from "./Comment";
const CommentAndReplies = ({ ...comments }) => {
  return (
    <>
      <Comment {...comments} />
      {comments.replies.length > 0 && (
        <>
          <div className="replies">
            {comments.replies.map((reply) => {
              return (
                <Comment
                  key={reply.id}
                  {...reply}
                  parentUser={comments.user.username}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default CommentAndReplies;