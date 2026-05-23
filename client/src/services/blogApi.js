import API from "./api";

// GET BLOGS
export const getBlogs = async () => {
  const res = await fetch(`${API}/api/blogs`);

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
};

// CREATE BLOG
export const createBlog = async (blogData) => {
  const res = await fetch(`${API}/api/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(blogData)
  });

  if (!res.ok) {
    throw new Error("Failed to create blog");
  }

  return res.json();
};

// DELETE BLOG
export const deleteBlog = async (id) => {
  const res = await fetch(`${API}/api/blogs/${id}`, {
    method: "DELETE"
  });

  if (!res.ok) {
    throw new Error("Failed to delete blog");
  }
};

// UPDATE BLOG
export const updateBlog = async (id, updatedData) => {
  const res = await fetch(`${API}/api/blogs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedData)
  });

  if (!res.ok) {
    throw new Error("Failed to update blog");
  }

  return res.json();
};