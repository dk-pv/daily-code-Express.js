const express = require("express");
const path = require("path");
const rootDir = require("../Tutils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "Tviews", "shop.html"));
});

module.exports = router;
