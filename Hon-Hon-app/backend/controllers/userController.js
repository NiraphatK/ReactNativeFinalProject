const User = require("../models/Users");

// ฟังก์ชันสร้างผู้ใช้ใหม่
const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const profile = []

  try {
    // ตรวจสอบว่าผู้ใช้อยู่แล้วหรือไม่
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // สร้างผู้ใช้ใหม่
    user = new User({ username, email, password,profile:profile });
    await user.save();

    res.status(201).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { createUser };
