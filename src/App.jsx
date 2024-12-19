import { useComment } from "./comments/useComment";
import CommentList from "./comments/CommentList";

function App() {
  const { error, isLoading, comments, addReply } = useComment();
  if (error) return <p>error: {error}</p>;
  if (isLoading) return <p>Loading ....</p>;
  return (
    <div>
      <CommentList comments={comments} addReply={addReply} />
    </div>
  );
}

export default App;
