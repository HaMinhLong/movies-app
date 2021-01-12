const postMessage = require("../models/postMessage");
const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const getPosts = async (req, res) => {
  try {
    const posts = await postMessage.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(409).json("Error: " + error.message);
  }
};

const createPost = async (req, res) => {
  const {
    title,
    description,
    starting,
    moreDes,
    watchOffline,
    movieIs,
    audio,
    subtitles,
    selectedFile,
  } = req.body;

  const newPostMessage = new postMessage({
    title,
    description,
    starting,
    moreDes,
    watchOffline,
    movieIs,
    audio,
    subtitles,
    selectedFile,
  });

  try {
    await newPostMessage.save();

    res.status(200).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json("No post with that id");

  const updatePost = await postMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatePost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await postMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};

module.exports = { getPosts, createPost, updatePost, deletePost, router };
