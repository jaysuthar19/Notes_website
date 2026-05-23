const Blog = require("../models/Blog");

// GET all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({
      createdAt: -1
    });

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch blogs"
    });
  }
};

// CREATE blog
const createBlog = async (req, res) => {
  try {
    const {
      title,
      content,
      coverImage
    } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const blog = await Blog.create({
      title,
      content,
      coverImage
    });

    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create blog"
    });
  }
};

// UPDATE blog
const updateBlog = async (req, res) => {
  try {
    const updatedBlog =
      await Blog.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true
        }
      );

    if (!updatedBlog) {
      return res.status(404).json({
        message: "Blog not found"
      });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update blog"
    });
  }
};

// DELETE blog
const deleteBlog = async (req, res) => {
  try {
    const deletedBlog =
      await Blog.findByIdAndDelete(
        req.params.id
      );

    if (!deletedBlog) {
      return res.status(404).json({
        message: "Blog not found"
      });
    }

    res.status(200).json({
      message: "Blog deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete blog"
    });
  }
};

module.exports = {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog
};