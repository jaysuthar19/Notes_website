import { useState } from "react";

import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";

const Home = ({
  blogs,
  loading,
  error,
  removeBlog
}) => {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="home-page">

      <div className="home-header">

        <h1>Latest Blogs</h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

      </div>

      <div className="blogs-grid">

        {filteredBlogs.map((blog) => (
          <BlogCard
            key={blog._id}
            blog={blog}
            handleDelete={removeBlog}
          />
        ))}

      </div>

    </div>
  );
};

export default Home;