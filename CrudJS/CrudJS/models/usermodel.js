const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  joined: {
    type: Date,
    require: true,
  },
});

module.exports = mongoose.model("userModel", userSchema);
