require("dotenv").config();

const express = require("express");
const { connectToDatabase } = require("./backend/config/db");

const giftRoutes = require("./backend/routes/giftRoutes");
const searchRoutes = require("./backend/routes/searchRoutes");

const app = express();

app.use(express.json());

app.use(giftRoutes);
app.use(searchRoutes);

async function startServer() {
  try {
    await connectToDatabase();

    app.get("/", (req, res) => {
      res.send("GiftLink API is running!");
    });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

startServer();