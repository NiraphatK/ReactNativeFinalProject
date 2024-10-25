const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
  title: { type: String },
  category: { type: String },
  image: { type: String },
  duration:{type:Number}
}, { _id: false }); // ไม่สร้าง _id ใน ProfileSchema


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
  profile: [ProfileSchema],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
