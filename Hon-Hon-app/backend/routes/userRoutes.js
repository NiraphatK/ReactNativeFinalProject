const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userController");

// Route Create User
router.post("/register", createUser);

module.exports = router;
