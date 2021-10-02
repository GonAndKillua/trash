const jwt = require("jsonwebtoken");

//create user=> admin,
//update user=>admin, editor
//delete user=>admin,
//get user=>admin,editor,subcriber

//Editor=> get,update

const createCheck = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const verify = jwt.verify(token, "this is key");
    console.log(typeof verify.usertype);
    if (verify.usertype === "Admin") {
      console.log("Admin");
      next();
    } else {
      return res.status(401).json({
        message: "Sorry You are not Admin",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "invalid token",
    });
  }
};
const updateCheck = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const verify = jwt.verify(token, "this is key");
    console.log(verify);
    if (verify.usertype === "Admin" || verify.usertype === "editor") {
      next();
      console.log("Admin");
    } else {
      return res.status(401).json({
        message: "Sorry You are not Admin",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "invalid token",
    });
  }
};

const getCheck = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const verify = jwt.verify(token, "this is key");
    console.log(verify);
    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid token",
    });
  }
};
module.exports = { createCheck, getCheck, updateCheck };
