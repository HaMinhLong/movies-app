const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This Work!");
});

module.exports = router;
