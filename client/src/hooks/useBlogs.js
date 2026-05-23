import { useEffect, useState } from "react";

import {
  getBlogs,
  createBlog,
  deleteBlog,
  updateBlog
} from "../services/blogApi";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  // FETCH BLOGS
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const data = await getBlogs();

      setBlogs(data);

      setError("");
    } catch (err) {
      setError("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  // ADD BLOG
  const addBlog = async (blogData) => {
    try {
      const newBlog =
        await createBlog(blogData);

      setBlogs((prev) => [
        newBlog,
        ...prev
      ]);

      return newBlog;
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE BLOG
  const removeBlog = async (id) => {
    try {
      await deleteBlog(id);

      setBlogs((prev) =>
        prev.filter(
          (blog) => blog._id !== id
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT BLOG
  const editBlog = async (
    id,
    updatedData
  ) => {
    try {
      const updated =
        await updateBlog(
          id,
          updatedData
        );

      setBlogs((prev) =>
        prev.map((blog) =>
          blog._id === id
            ? updated
            : blog
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  return {
    blogs,
    loading,
    error,
    addBlog,
    removeBlog,
    editBlog
  };
};

export default useBlogs;