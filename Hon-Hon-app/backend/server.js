const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const { createUser } = require("./controllers/userController");
const Users = require("./models/Users");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const { log } = require("console");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB Connected");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // ไดเรกทอรีที่คุณต้องการบันทึกไฟล์
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // ตั้งชื่อไฟล์ให้ไม่ซ้ำ
  }
});

const upload = multer({ storage: storage });

app.post("/upload/:userId", upload.single("image"), async (req, res) => {
  try {
    const { title, category } = req.body;
    const username = req.params.userId;
    
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const newProfileEntry = {
      title: title,
      category: category,
      image: req.file.path,
      duration: 0,
    };


    const updatedUser = await Users.findOneAndUpdate(
      { username: username },
      { $push: { profile: newProfileEntry } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Upload failed" });
  }
});


app.post("/users/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const chkUser = await Users.findOne({
      username: username,
      password: password,
    });
    console.log(chkUser);
    if (chkUser) {
      return res
        .status(200)
        .json({ message: "Find your username in database" });
    }
    res.status(404).json({ message: "User Not found" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/users/register", (req, res) => {
  createUser(req, res);
});

app.get('/api/profile/:userId', async (req, res) => {
  try {
      const userId = req.params.userId;
      const userProfile = await Users.findOne({username:userId}); // หรือ fetch ข้อมูลจาก DB ของคุณ

      if (!userProfile) {
          return res.status(404).json({ message: 'Profile not found' });
      }

      res.status(200).json(userProfile.profile); // ส่ง response ไปยัง client
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/update/duration', async (req, res) => {
  try {
      const { userId, time, index } = req.body;

      const userProfile = await Users.findOne({ username: userId });

      if (!userProfile) {
          return res.status(404).json({ message: 'Profile not found' });
      }

      if (index < 0 || index >= userProfile.profile.length) {
          return res.status(400).json({ message: 'Invalid index' });
      }

      userProfile.profile[index].duration += time;

      await userProfile.save();
      res.status(200).json({ message: 'Duration updated successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
