// jshint esversion: 8

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var currentDate = today.getDay();

  if (currentDate === 6 || currentDate === 0) {
    res.sendFile(__dirname + "/index.html");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
