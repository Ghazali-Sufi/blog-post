import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigateTo = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const blog = { title, body, author };

    setIsLoading(true);
    fetch("https://blog-repository-rcst.onrender.com/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog has been added");
      setIsLoading(false);
      navigateTo("/");
    });
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <label>Blog author:</label>
        <select
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="">Select an author...</option>
          <option value="Ghazali">Ghazali</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
