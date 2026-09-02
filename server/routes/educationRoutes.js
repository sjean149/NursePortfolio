const express = require("express");
const Education = require("../models/Education");

const router = express.Router();

// GET all education
router.get("/", async (req, res) => {
  try {
    const education = await Education.find();

    res.json(education);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// GET one education
router.get("/:id", async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);

    if (!education) {
      return res.status(404).json({
        message: "Education not found",
      });
    }

    res.json(education);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// CREATE education
router.post("/", async (req, res) => {
  try {
    const education = new Education(req.body);

    const savedEducation = await education.save();

    res.status(201).json(savedEducation);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// UPDATE education
router.put("/:id", async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!education) {
      return res.status(404).json({
        message: "Education not found",
      });
    }

    res.json(education);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// DELETE education
router.delete("/:id", async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);

    if (!education) {
      return res.status(404).json({
        message: "Education not found",
      });
    }

    res.json({
      message: "Education deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
