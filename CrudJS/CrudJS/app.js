const express = require("express");
const mongoose = require("mongoose");
const AuthRoute = require("./routes/authroute");
const bodyParser = require("body-parser");
const UserRoute = require("./routes/userroutes");

const url =
  "mongodb+srv://mohit:One23456789@rest.bk3xu.mongodb.net/REST?retryWrites=true&w=majority";

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/auth", AuthRoute);
app.use("/users", UserRoute);

mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

app.listen(3000, () => {
  console.log("server started");
});
