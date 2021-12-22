const express = require("express");
const dotenv = require("dotenv").config({
    path: "./config/env/config.env"
});
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, ()=>{
    console.log("Server started");
});