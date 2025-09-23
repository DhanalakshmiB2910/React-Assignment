import { FiPlus } from "react-icons/fi";

const PostForm = ({ title, body, setTitle, setBody, handleAddPost }) => {
  return (
    <form onSubmit={handleAddPost} className="input-icon">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">
        <FiPlus className="icon-button" /> Add Post
      </button>
    </form>
  );
};

export default PostForm;
