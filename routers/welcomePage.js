const express = require("express");
const router = express.Router();
const {readInputFile} = require("../controllers/welcomePageMethods");

router.get("/", (req, res) =>{
    res.send("Welcome Page");
});

router.get("/read-input-file", readInputFile);

module.exports = router;