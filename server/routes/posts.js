const express = require("express");
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
} = require("../controllers/posts");

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);
router.patch("/:id", getPost);

module.exports = router;
