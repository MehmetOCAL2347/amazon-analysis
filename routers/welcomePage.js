const express = require("express");
const router = express.Router();
const { excelFileReader } = require("../middlewares/readExcelFile");
const { readInputFile } = require("../controllers/welcomePageMethods");

router.post("/read-input-file", excelFileReader.single("readFile"), readInputFile);

module.exports = router;
