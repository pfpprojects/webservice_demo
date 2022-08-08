const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;

app.use(express.static("views"));
app.set("views", "./views");
app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home/home.page.html");
});

app.get("/add", (req, res) => {
  try {
    let a = Number(req.query["fnumber"]);
    let b = Number(req.query["snumber"]);
    let result = a + b;
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(error).json(error);
  }
});

app.get("/api/add", (req, res) => {
  try {
    let a = Number(req.query["fnumber"]);
    let b = Number(req.query["snumber"]);
    let result = a + b;
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(error).json(error);
  }
});

app.get("/api/sub", (req, res) => {
  try {
    let a = Number(req.query["fnumber"]);
    let b = Number(req.query["snumber"]);
    let result = a - b;
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(error).json(error);
  }
});

app.get("/api/mul", (req, res) => {
  try {
    let a = Number(req.query["fnumber"]);
    let b = Number(req.query["snumber"]);
    let result = a * b;
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(error).json(error);
  }
});

app.get("/api/div", (req, res) => {
  try {
    let a = Number(req.query["fnumber"]);
    let b = Number(req.query["snumber"]);
    let result = a / b;
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(error).json(error);
  }
});

app.get("/calcpage", (req, res) => {
  res.sendFile(__dirname + "/views/home/calc.page.html");
});



app.listen(port, () => {
  console.log("Application started and Listening on port 3000");
});
