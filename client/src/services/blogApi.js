const API =
  "http://localhost:5000/api/blogs";

// GET BLOGS
export const getBlogs = async () => {
  const res = await fetch(API);

  return res.json();
};

// CREATE BLOG
export const createBlog = async (
  blogData
) => {
  const res = await fetch(API, {
    method: "POST",

    headers: {
      "Content-Type":
        "application/json"
    },

    body: JSON.stringify(blogData)
  });

  return res.json();
};

// DELETE BLOG
export const deleteBlog = async (
  id
) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });
};

// UPDATE BLOG
export const updateBlog = async (
  id,
  updatedData
) => {
  const res = await fetch(
    `${API}/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json"
      },

      body: JSON.stringify(
        updatedData
      )
    }
  );

  return res.json();
};