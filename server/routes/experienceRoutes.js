const express = require("express");
const Experience = require("../models/Experience");

const router = express.Router();

// GET all experience
router.get("/", async (req, res) => {
  try {
    const experiences = await Experience.find();

    res.json(experiences);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// GET one experience
router.get("/:id", async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);

    if (!experience) {
      return res.status(404).json({
        message: "Experience not found",
      });
    }

    res.json(experience);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// CREATE experience
router.post("/", async (req, res) => {
  try {
    const experience = new Experience(req.body);

    const savedExperience = await experience.save();

    res.status(201).json(savedExperience);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// UPDATE experience
router.put("/:id", async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!experience) {
      return res.status(404).json({
        message: "Experience not found",
      });
    }

    res.json(experience);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// DELETE experience
router.delete("/:id", async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);

    if (!experience) {
      return res.status(404).json({
        message: "Experience not found",
      });
    }

    res.json({
      message: "Experience deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
