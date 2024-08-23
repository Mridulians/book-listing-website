const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const router = express.Router();

// Register route
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });
    res.json({ token, user: { username, email, id: user._id } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password)))
      return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });
    res.json({ token, user: { username: user.username, email, id: user._id } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
