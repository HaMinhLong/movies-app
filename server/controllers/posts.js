const postMessage = require("../models/postMessage");

const getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(400).json({ message: error.message });
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

  const newPost = new postMessage({
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
    await newPost.save();
    console.log("create Post Success");
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = getPosts;
module.exports = createPost;
