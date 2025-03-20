import React, { useState } from "react";
import Comment from "./Comment";

const Answer = ({ answer }) => {
  const [likes, setLikes] = useState(answer.likes);
  const [comments, setComments] = useState(answer.comments);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = () => {
    const comment = {
      id: Date.now(),
      user: "CurrentUser", // Replace with actual user
      text: newComment,
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <div className="answer">
      <h4>{answer.user} answered:</h4>
      <p>{answer.text}</p>
      {answer.image && (
        <img src={URL.createObjectURL(answer.image)} alt="Answer" />
      )}
      {answer.pdf && <a href={URL.createObjectURL(answer.pdf)}>Download PDF</a>}
      <div className="actions">
        <button onClick={handleLike}>Like ({likes})</button>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Comment</button>
      </div>
      <div className="comments">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Answer;
