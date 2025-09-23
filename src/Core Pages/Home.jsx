import { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import PostForm from "../Components/PostForm";
import PostList from "../Components/PostList";
import "../Styles/Home.css";

function Home() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch posts on mount
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((err) => console.error("Error fetching posts:", err))
      .finally(() => setLoading(false));
  }, []);

  // CRUD operations
  const handleAddPost = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    })
      .then((res) => res.json())
      .then((newPost) => {
        setPosts([newPost, ...posts]);
        setTitle("");
        setBody("");
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => setPosts(posts.filter((post) => post.id !== id)))
      .catch((err) => console.error(err));
  };

  const handleEdit = (post) => {
    setEditId(post.id);
    setEditTitle(post.title);
    setEditBody(post.body);
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditTitle("");
    setEditBody("");
  };

  const handleSaveEdit = (id) => {
    if (!editTitle || !editBody) return;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: editTitle, body: editBody }),
    })
      .then((res) => res.json())
      .then((updatedPost) => {
        setPosts(posts.map((p) => (p.id === id ? updatedPost : p)));
        handleCancelEdit();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container home-page">
      <Navbar />
      <h2>Home - CRUD with Fetch API</h2>

      <PostForm
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
        handleAddPost={handleAddPost}
      />

      {loading ? (
        <div className="loading">Loading posts...</div>
      ) : (
        <PostList
          posts={posts}
          editId={editId}
          editTitle={editTitle}
          editBody={editBody}
          setEditTitle={setEditTitle}
          setEditBody={setEditBody}
          handleEdit={handleEdit}
          handleCancelEdit={handleCancelEdit}
          handleSaveEdit={handleSaveEdit}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default Home;
