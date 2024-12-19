import { useEffect, useState } from "react";

export const useComment = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments?_limit=10"
        );
        if (!response.ok) throw new Error("network error ....");
        const data = await response.json();
        setComments(data.map((comment) => ({ ...comment, replies: [] })));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchComment();
  }, []);

  const addReply = (commentId, replyText) => {
    setComments((prevComment) =>
      prevComment.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                { id: Date.now(), body: replyText, email: "user@gmail.com" },
              ],
            }
          : comment
      )
    );
  };
  return { error, isLoading, comments, addReply };
};
