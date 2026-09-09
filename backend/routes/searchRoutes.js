const express = require("express");
const { connectToDatabase } = require("../config/db");

const router = express.Router();

// Search gifts by category
router.get("/api/search", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const category = req.query.category;

    const gifts = await db.collection("gifts").find({
      category: category
    }).toArray();

    res.json(gifts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Search failed" });
  }
});

module.exports = router;
