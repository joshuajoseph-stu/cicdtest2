const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(express.json());
app.use(express.urlencoded());

GetRes = { todo_name: "Hello", todo_desc: "World" };

app.get("/", (req, res) => {
  res.send(GetRes);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000, function () {
  console.log("listening on 3000");
});

//npm start
