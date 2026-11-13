const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/database");
const experienceRoutes = require("./routes/experienceRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// CLIENT_URL can be a comma-separated list of allowed origins.
// If it is not set, all origins are allowed (handy for local development).
const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(",").map((origin) => origin.trim())
  : null;

app.use(cors(allowedOrigins ? { origin: allowedOrigins } : {}));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Nurse Portfolio API is running",
  });
});

// Health check used by Render
app.get("/health", async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).json({ status: "ok" });
  } catch (error) {
    res.status(503).json({ status: "error", message: "Database unavailable" });
  }
});

app.use("/api/experience", experienceRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");

    // Creates tables that don't exist yet; never drops or alters existing ones.
    await sequelize.sync();

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start server:", error);
    process.exit(1);
  }
};

startServer();
