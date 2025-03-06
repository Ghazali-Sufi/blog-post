import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import "../css/BlogDetails.css"

const BlogDetails = () => {
  const { id } = useParams();

  const {
    data: blog,
    isLoading,
    error
  } = useFetch('https://blog-repository-rcst.onrender.com/blogs' + id);

  const navigateTo = useNavigate()

  const handleDelete = () => {
    fetch('https://blog-repository-rcst.onrender.com/blogs' + blog.id, {
      method: "DELETE",
    }).then(() => {
      console.log("Blog Deleted successfully");
      navigateTo("/")
    })
  }

  return (
    <div className="blog-details">
        {isLoading && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
