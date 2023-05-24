/* eslint-disable react/prop-types */
import React from "react";
import { useState} from "react";
import data from "./data.json";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [comments, setComments] = useState(data.comments);
  const [currentUser, setCurrentUser] = useState(data.currentUser);
  const [isReplying, setIsReplying] = useState(false);

  const handleReply = (reply, user) => {
    const newComments = comments.map((comment) => {
      if (comment.user.username === user) {
        return {
          ...comment,
          replies: [
            ...(comment.replies || []),
            {
              id: Math.floor(Math.random() * 100),
              createdAt: new Date().toLocaleDateString(),
              content: reply,
              score: 0,
              replyingTo: user,
              replies: [],
              user: {
                image: {
                  png: currentUser.image.png,
                  webp: currentUser.image.webp,
                },
                username: currentUser.username,
              },
            },
          ],
        };
      }
      return comment;
    });
    setComments(newComments);
  };
  const handleComment = (comment) => {
    const newComments = [
      ...comments,
      {
        id: Math.floor(Math.random() * 100),
        createdAt: new Date().toLocaleDateString(),
        content: comment,
        score: 0,
        replies: [],
        user: {
          image: {
            png: currentUser.image.png,
            webp: currentUser.image.webp,
          },
          username: currentUser.username,
        },
      },
    ];
    setComments(newComments);
    console.log(comments);
  };
  const handleDelete = (id, checkUserReply) => {
    if (checkUserReply === "normalComment") {
      const newComments = comments.filter((comment) => comment.id !== id);
      setComments(newComments);
    }
    if (checkUserReply === "reply") {
      const newComments = comments.map((comment) => {
        if (comment.replies) {
          const newReplies = comment.replies.filter((reply) => reply.id !== id);
          return { ...comment, replies: newReplies };
        }
        return comment;
      });
      setComments(newComments);
    }
  };
  const handleEdit = (id, checkUserReply, newContent) => {
    if (checkUserReply === "normalComment") {
      const newComments = comments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, content: newContent };
        }
        return comment;
      });
      setComments(newComments);
    }
    if (checkUserReply === "reply") {
      const newComments = comments.map((comment) => {
        if (comment.replies) {
          const newReplies = comment.replies.map((reply) => {
            if (reply.id === id) {
              return { ...reply, content: newContent };
            }
            return reply;
          });
          return { ...comment, replies: newReplies };
        }
        return comment;
      });
      setComments(newComments);
    }
  };
  const handleScore = (id, checkUserReply, score) => {
    if (checkUserReply === "normalComment") {
      const newComments = comments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, score: score };
        }
        return comment;
      });
      setComments(newComments);
    }
    if (checkUserReply === "reply") {
      const newComments = comments.map((comment) => {
        if (comment.replies) {
          const newReplies = comment.replies.map((reply) => {
            if (reply.id === id) {
              return { ...reply, score: score };
            }
            return reply;
          });
          return { ...comment, replies: newReplies };
        }
        return comment;
      });
      setComments(newComments);
    }
  };

  return (
    <AppContext.Provider
      value={{
        comments,
        setComments,
        currentUser,
        isReplying,
        handleReply,
        handleComment,
        handleDelete,
        handleEdit,
        handleScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };