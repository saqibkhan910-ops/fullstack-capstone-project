const express = require("express");
const { connectToDatabase } = require("../config/db");

const router = express.Router();

// Get all gifts
router.get("/api/gifts", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const gifts = await db.collection("gifts").find({}).toArray();

    res.json(gifts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch gifts" });
  }
});

// Get one gift by ID
router.get("/api/gifts/:id", async (req, res) => {
  try {
    const db = await connectToDatabase();

    const gift = await db.collection("gifts").findOne({
      id: req.params.id
    });

    if (!gift) {
      return res.status(404).json({ error: "Gift not found" });
    }

    res.json(gift);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch gift" });
  }
});

module.exports = router;