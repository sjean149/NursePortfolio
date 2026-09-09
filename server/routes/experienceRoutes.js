const express = require("express");

const {
  getExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/experienceController");

const router = express.Router();

// GET all experiences
router.get("/", getExperiences);

// GET one experience
router.get("/:id", getExperience);

// CREATE experience
router.post("/", createExperience);

// UPDATE experience
router.put("/:id", updateExperience);

// DELETE experience
router.delete("/:id", deleteExperience);

module.exports = router;
