import API from "./api";

// GET BLOGS
export const getBlogs = async () => {
  const res = await fetch(`${API}/api/blogs`);
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

  return res.json();
};

// DELETE BLOG
export const deleteBlog = async (id) => {
  await fetch(`${API}/api/blogs/${id}`, {
    method: "DELETE"
  });
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

  return res.json();
};