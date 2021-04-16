// jshint esversion: 8

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Satuarday",
];

app.get("/", function (req, res) {
  var today = new Date();
  var currentDate = today.getDay();

  if (currentDate > 6 || currentDate < 0) {
    console.log("Error: currentDay is equal to: " + currentDate);
  } else {
    var day = days[currentDate];
  }

  res.render("list", { kindOfDay: day });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
