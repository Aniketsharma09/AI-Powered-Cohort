const express = require("express");
const router = express.Router();
const userModel = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

// Register user
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await userModel.findOne({ username });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" }); 
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await userModel.create({username: username, password :hashedPassword });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECERATE);

    res.cookie("token", token);
    res.status(201).json({ message: "User registered successfully" }); 
  } catch (error) {
    res.status(500).json({ message: "Server Error" }); 
  }
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or not registered" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECERATE);
    res.cookie("token", token);
    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get user (Protected)
router.get("/user", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Login to view profile" });
    }

    const { id } = jwt.verify(token, process.env.JWT_SECERATE);
    const user = await userModel.findById(id);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    res.status(200).json({ message: "Profile fetched successfully", user });
  } catch (error) {
    res.status(401).json({ message: "Invalid token or user not found" });
  }
});

// Logout
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successfully" });
});

module.exports = router;
