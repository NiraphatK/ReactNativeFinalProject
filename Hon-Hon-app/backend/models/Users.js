const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile:{
    type:[String],
    require:false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  alarm:{
    time:{type:String},
    alert:{type:Boolean}
  }
});

module.exports = mongoose.model("User", UserSchema);
