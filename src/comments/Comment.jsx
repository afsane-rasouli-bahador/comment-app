import React, { useState } from "react";

function Comment({ comment, addReply }) {
  const [replyText, setReplyText] = useState("");
  const [showReplyForm, setShowReplyForm] = useState(false);
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      addReply(comment.id, replyText);
      setReplyText("");
      setShowReplyForm(false);
    }
  };
  return (
    <div>
      <h3>{comment.email}</h3>
      <p>{comment.body}</p>
      <button onClick={() => setShowReplyForm(!showReplyForm)}>
        {showReplyForm ? "cancel Reply" : "Reply"}
      </button>
      {showReplyForm && (
        <form onSubmit={submitFormHandler}>
          <textarea
            placeholder="write reply text..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          ></textarea>
          <button type="submit">Submit Reply</button>
        </form>
      )}
      {comment.replies.length > 0 && (
        <div>
            {comment.replies.map((reply)=>(
                <div key={reply.id}>
                    <h4>{reply.email}</h4>
                    <p>{reply.body}</p>
                </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Comment;
