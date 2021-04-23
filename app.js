// jshint esversion: 8

const express = require("express");
const app = express();
const date = require(__dirname + "/date.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const newItems = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];


app.get("/", function (req, res) {

  const day = date.getDate();

  res.render("list", { listTitle: day, newItems: newItems });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    newItems.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newItems: workItems });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
