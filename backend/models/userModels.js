const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  stream: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("User", userschema);

module.exports = User;
