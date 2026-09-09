const express = require("express");
const { connectToDatabase } = require("../config/db");

const router = express.Router();

router.post("/api/login", async (req, res) => {
  try {
    const db = await connectToDatabase();

    const user = await db.collection("users").findOne({
      username: req.body.username
    });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    res.json({ message: "User found", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;