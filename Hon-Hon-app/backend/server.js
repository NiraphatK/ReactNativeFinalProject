const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const {createUser} = require("./controllers/userController");
const Users = require("./models/Users");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// // Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


// Routes
// app.use("/users", createUser);

app.post('/users/login', async (req,res) => {
  try {
    const {username,password} = req.body
    
    const chkUser = await Users.findOne({ username: username,password:password });
    console.log(chkUser);
    if(chkUser) {
      return res.status(200).json({ message: "Find your username in database" });
    }
    
  } catch (error) {
    
  }
})

app.post('/users/register', (req,res) => {
  console.log(req.body);
  createUser(req,res)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
