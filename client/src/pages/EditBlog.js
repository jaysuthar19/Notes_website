import { useNavigate, useParams } from "react-router-dom";

import BlogForm from "../components/BlogForm";

const EditBlog = ({
  blogs,
  editBlog
}) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const blog = blogs.find(
    (item) => item._id === id
  );

  const handleUpdate = async (blogData) => {
    await editBlog(id, blogData);

    navigate("/");
  };

  if (!blog) {
    return (
      <div className="not-found">
        <h2>Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="edit-blog-page">

      <div className="page-header">
        <h1>Edit Blog</h1>
      </div>

      <BlogForm
        handleSubmit={handleUpdate}
        editingBlog={blog}
      />

    </div>
  );
};

export default EditBlog;