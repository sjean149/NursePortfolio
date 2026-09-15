const express = require("express");
const cors = require("cors");
require("dotenv").config();

const experienceRoutes = require("./routes/experienceRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const pool = require("./config/db");

pool.query("SELECT NOW()", (error, result) => {
  if (error) {
    console.error("Database connection failed:", error);
  } else {
    console.log("Database connected:", result.rows[0]);
  }
});


app.get("/", (req, res) => {
  res.json({
    message: "Nurse Portfolio API is running",
  });
});

app.use("/api/experience", experienceRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
