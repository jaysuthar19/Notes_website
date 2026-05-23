import { useParams, Link } from "react-router-dom";

const BlogDetails = ({
  blogs
}) => {
  const { id } = useParams();

  const blog = blogs.find(
    (item) => item._id === id
  );

  if (!blog) {
    return (
      <div className="not-found">
        <h2>Blog not found</h2>

        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-details-page">

      <div className="blog-details-card">

        <img
          src={
            blog.coverImage ||
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          }
          alt={blog.title}
          className="details-image"
        />

        <div className="details-content">

          <h1>{blog.title}</h1>

          <div className="details-meta">
            <span>
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </div>

          <p>{blog.content}</p>

        </div>

      </div>

    </div>
  );
};

export default BlogDetails;