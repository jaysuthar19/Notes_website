import { useNavigate } from "react-router-dom";

import BlogForm from "../components/BlogForm";

const CreateBlog = ({
  addBlog
}) => {
  const navigate = useNavigate();

  const handleCreate = async (blogData) => {
    await addBlog(blogData);

    navigate("/");
  };

  return (
    <div className="create-blog-page">

      <div className="page-header">
        <h1>Create New Blog</h1>
        <p>Share your thoughts with the world.</p>
      </div>

      <BlogForm handleSubmit={handleCreate} />

    </div>
  );
};

export default CreateBlog;