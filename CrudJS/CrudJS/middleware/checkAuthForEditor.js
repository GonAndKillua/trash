const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const verify = jwt.verify(token, "this is key");
    console.log(verify);
    if (verify.usertype === "editor") {
      next();
      console.log("editor");
    } else {
      return res.status(401).json({
        message: "not editor ",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "invalid token",
    });
  }
};
