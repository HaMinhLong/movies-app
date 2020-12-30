const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  starting: String,
  moreDes: String,
  watchOffline: String,
  movieIs: String,
  audio: String,
  subtitles: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const postMessage = mongoose.model("postMessage", postSchema);

module.exports = postMessage;
