//jshint esversion:6
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
    res.status(200);
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});