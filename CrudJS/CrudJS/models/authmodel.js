const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  usertype: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("AuthModel", authSchema);
