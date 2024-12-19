import React, { useState } from "react";
import styled from "styled-components";
import { MdCancelScheduleSend } from "react-icons/md";
import { FaReply } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import styles from './Comment.module.css';

const ButtonStyle = styled.button`
    background-color: ${(props)=>props.reply ? 'green' : 'rgb(214, 214, 214)'};
    padding: 0.5rem 1rem;
    border-radius: 15px;
    color:  ${(props)=>props.reply ? 'white' : "black"};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: none;
    margin-bottom: 1rem;
    width: max-content;
`
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
    <div className={styles.commentbox}>
      <h3>{comment.email}</h3>
      <p>{comment.body}</p>
      <ButtonStyle onClick={() => setShowReplyForm(!showReplyForm)}>
        {showReplyForm ? <><MdCancelScheduleSend/> Cancel Reply</> : <><FaReply/> Reply</>}
      </ButtonStyle>
      {showReplyForm && (
        <form onSubmit={submitFormHandler} className={styles.submitForm}>
          <textarea className={styles.replyArea}
            placeholder="write reply text..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          ></textarea>
          <ButtonStyle type="submit" reply><><IoSend/>Submit Reply</></ButtonStyle>
        </form>
      )}
      {comment.replies.length > 0 && (
        <div className={styles.replyItems}>
            {comment.replies.map((reply)=>(
                <div key={reply.id} className={styles.replybox}>
                    <h4>{reply.email}</h4>
                    <p>{reply.body}</p>
                    <br />
                </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Comment;
