import React from "react";
import Comment from "./Comment";
import styles from './CommentList.module.css'
function CommentList({ comments, addReply }) {
  return (
    <div className={styles.commentList}>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} addReply={addReply} />
      ))}
    </div>
  );
}

export default CommentList;
