import { Link } from "react-router-dom";

const BlogCard = ({ blog, handleDelete }) => {
  return (
    <div className="blog-card">
      <img
        src={
          blog.coverImage ||
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        }
        alt={blog.title}
        className="blog-image"
      />

      <div className="blog-content">
        <h2>{blog.title}</h2>

        <p>
          {blog.content?.slice(0, 120)}
          ...
        </p>

        <div className="blog-meta">
          <span>
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
        </div>

        <div className="blog-actions">
          <Link to={`/blog/${blog._id}`}>
            <button>Read More</button>
          </Link>

          <Link to={`/edit/${blog._id}`}>
            <button>Edit</button>
          </Link>

          <button onClick={() => handleDelete(blog._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;