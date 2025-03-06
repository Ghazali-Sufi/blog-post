import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
  // this means grap the data but call it blogs in tis context
  const {
    data: blogs,
    isLoading,
    error
  } = useFetch('https://blog-repository-rcst.onrender.com/blogs');

//   console.log("data", blogs);

  return (
    <div className="home">
      {isLoading && <div> Loading.....</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
