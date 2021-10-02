const express = require("express");
const route = express.Router();
const userModel = require("../models/usermodel");
// import { createCheck, updateCheck, getCheck } from "../middleware/check-auth";
const checkAuth = require("../middleware/check-auth");
// const getCheck = require("../middleware/check-auth");
// const updateCheck = require("../middleware/check-auth");

//get
route.get("/get", checkAuth.getCheck, async (req, res) => {
  try {
    const data = await userModel.findOne({
      email: req.body.email,
    });
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

///add-user
route.post("/add", checkAuth.createCheck, async (req, res) => {
  try {
    const addData = new userModel({
      name: req.body.name,
      email: req.body.email,
      status: req.body.status,
    });
    const result = await addData.save();
    res.json(result);
  } catch (error) {
    res.json({ message: error });
  }
});

//delete user
route.delete("/delete", checkAuth.createCheck, async (req, res) => {
  try {
    const data = await userModel.findOneAndDelete({
      email: req.body.email,
    });
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

//update-user or edit
route.put("/update", checkAuth.updateCheck, async (req, res) => {
  try {
    const data = await userModel.updateMany(
      {
        email: req.body.email,
      },
      {
        name: req.body.name,
      }
    );
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = route;
