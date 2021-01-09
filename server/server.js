const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postRoutes = require("./routes/posts");

const app = express();

app.use(bodyParser.json({ limit: "300mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "300mb", extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost/movies", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use("/posts", postRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));
