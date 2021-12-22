const express = require("express");
const router = express.Router();
const {readInputFile} = require("../controllers/welcomePageMethods");

router.get("/", (req, res) =>{
    res.send("Welcome Page");
});

router.post("/read-input-file", readInputFile);

module.exports = router;