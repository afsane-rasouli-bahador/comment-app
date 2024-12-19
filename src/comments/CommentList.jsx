import React from "react";
import Comment from "./Comment";
function CommentList({ comments, addReply }) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} addReply={addReply} />
      ))}
    </div>
  );
}

export default CommentList;
