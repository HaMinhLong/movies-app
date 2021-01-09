const postMessage = require("../models/postMessage");
const express = require("express");

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

const deletePost = async (req, res) => {
  const deletedPost = await postMessage.findByIdAndDelete(req.params.id);
  res.send(deletedPost);
};

module.exports = { getPosts, createPost, deletePost, router };
