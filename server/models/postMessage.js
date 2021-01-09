const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
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

const postMessage = mongoose.model("postMessages", postSchema);

module.exports = postMessage;
