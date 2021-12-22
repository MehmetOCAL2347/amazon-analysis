const express = require("express");
const router = express.Router();
const welcome = require("./welcomePage");

router.use("/welcome-page", welcome);

module.exports = router;