const express = require("express");

const router = express.Router();

const {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog
} = require("../controllers/blogController");

// GET
router.get("/", getBlogs);

// CREATE
router.post("/", createBlog);

// UPDATE
router.put("/:id", updateBlog);

// DELETE
router.delete("/:id", deleteBlog);

module.exports = router;