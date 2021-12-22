const express = require("express");
const dotenv = require("dotenv").config({
    path: "./config/env/config.env"
});
const app = express();
const allRouters = require("./routers/allRouters");
const PORT = process.env.PORT;

app.use("/", allRouters);

app.listen(PORT, ()=>{
    console.log("Server started");
});