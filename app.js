// jshint esversion: 8

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let newItems = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function (req, res) {
  var today = new Date();

  var options = { weekday: "long", day: "numeric", month: "long" };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newItems: newItems });
});

app.post("/", function (req, res) {
  newItems.push(req.body.newItem);

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
