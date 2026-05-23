import { useState, useEffect } from "react";

const BlogForm = ({
  handleSubmit,
  editingBlog
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title || "");
      setContent(editingBlog.content || "");
      setCoverImage(editingBlog.coverImage || "");
    }
  }, [editingBlog]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    handleSubmit({
      title,
      content,
      coverImage
    });

    setTitle("");
    setContent("");
    setCoverImage("");
  };

  return (
    <form className="blog-form" onSubmit={onSubmit}>

      <input
        type="text"
        placeholder="Blog title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Cover image URL..."
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
      />

      <textarea
        rows="10"
        placeholder="Write your blog..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">
        {editingBlog ? "Update Blog" : "Publish Blog"}
      </button>

    </form>
  );
};

export default BlogForm;