// jshint esversion: 8

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let newItems = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", function (req, res) {
  var today = new Date();

  var options = { weekday: "long", day: "numeric", month: "long" };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { listTitle: day, newItems: newItems });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  if (req.body.list === "Work") {
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
