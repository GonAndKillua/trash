const express = require("express");
const route = express.Router();
const AuthModel = require("../models/authmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//login request
route.post("/login", async (req, res) => {
  console.log(req.body.email);
  await AuthModel.find({ email: req.body.email })
    .exec()
    .then((auth) => {
      if (auth.length < 1) {
        return res.status(401).json({
          message: "User Not Found",
        });
      }
      bcrypt.compare(req.body.password, auth[0].password, (err, result) => {
        if (!result) {
          return res.status(401).json({
            message: "Password didn't match",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: auth[0].email,
              name: auth[0].name,
              usertype: auth[0].usertype,
              phone: auth[0].phone,
            },
            "this is key", // Token secret key
            {
              expiresIn: "24h",
            }
          );
          res.status(200).json({
            email: auth[0].email,
            name: auth[0].name,
            usertype: auth[0].usertype,
            phont: auth[0].phone,
            token: token,
          });
        }
      });
    })
    .catch((err) => {
      res.status(500).json({
        err: err,
      });
    });
});
route.post("/signup", async (req, res) => {
  let signupdata;
  bcrypt.hash(req.body.password, 10, async (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    } else {
      console.log(req.body);
      signupdata = new AuthModel({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        phone: req.body.phone,
        usertype: req.body.usertype,
      });
    }
    try {
      const result = await signupdata.save();
      res.json({ message: "Succesfull" });
    } catch (error) {
      res.json({ message: "Failed" });
    }
  });
});

module.exports = route;
