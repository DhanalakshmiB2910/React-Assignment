import { FiFileText, FiTrash2, FiEdit, FiSave, FiX } from "react-icons/fi";

const PostList = ({
  posts,
  editId,
  editTitle,
  editBody,
  setEditTitle,
  setEditBody,
  handleEdit,
  handleCancelEdit,
  handleSaveEdit,
  handleDelete,
}) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {editId === post.id ? (
            <div className="edit-form">
              {/* Edit mode */}
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <input
                type="text"
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
              />
              {/* Save and Cancel buttons */}
              <button onClick={() => handleSaveEdit(post.id)}>
                <FiSave className="icon-button" /> Save
              </button>
              <button onClick={handleCancelEdit}>
                <FiX className="icon-button" /> Cancel
              </button>
            </div>
          ) : (
            <>
              <h4>
                {/* View mode */}
                <FiFileText className="list-icon" /> {post.title}
              </h4>
              <p>{post.body}</p>
              <div className="post-actions">
                {/* Edit and Delete buttons */}
                <button onClick={() => handleEdit(post)}>
                  <FiEdit className="icon-button" /> Edit
                </button>
                <button onClick={() => handleDelete(post.id)}>
                  <FiTrash2 className="icon-button" /> Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
