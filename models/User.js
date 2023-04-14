const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  fullname: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  coins:{
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image:{
    type: String,
  }
});
module.exports = mongoose.model("user", UserSchema);
