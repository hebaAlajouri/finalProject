/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { MongoClient } = require("mongodb");

const connection =
  "mongodb+srv://janaqtanani:janaq2003@cluster0.dnjmvqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(connection);

const mydb = client.db("jana");
const bodyParse = require("body-parser");
// const { createServer } = require("https");
// const { parse } = require("url");

const urlencoded = bodyParse.urlencoded({ extended: false });

const collection = mydb.collection("users");

app.get("/form", function (req, res) {
  res.json((`${__dirname}/src/ogin.jsx`));
 // res.sendFile(`${__dirname}/src/login.jsx`);
});
// app.post("/register", (req, res) => {
//   const { username } = req.body;
//   console.log("Username submitted:", username);
//   // Process the data here, then respond to the client
//   res.send("Form received");
// });
app.post("/register", async (req, res) => {
  // {    const finduser= await collection.findOne({'userName':req.body.userName})
  // if (finduser)
  // {
  //     res.sendFile(__dirname+"/userInfo.html")
  // }
  // else{
  console.log({ req: req.body });
  const createuser = await collection
    .insertOne({
      username: req.body.username,
      email: req.body.email,
      passowrd: req.body.password,
      confirmPassword: req.body.confirmPassword,
    })
    .then((result) => result)
    .catch((err) => err);
  console.log({ createuser });
  // todo fix the error code and check the success code if its working after the DB issue fixed
  if (createuser.status === 200) res.redirect("/login");
  else res.sendStatus(200);
});

app.post("/login", urlencoded, async (req, res) => {
  const finduser = await collection.findOne({ email: req.body.email });

  if (finduser) {
    res.sendFile(`${__dirname}/userInfo.js`);
  } else {
    res.sendFile(`${__dirname}/register.jsx`);
  }
});

app.get("/r", function (req, res) {
  console.log("start server", req.body);
  res.send("start server");
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(5000, (err) => {
  if (err) throw err;
});
