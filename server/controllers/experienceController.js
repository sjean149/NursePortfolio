const Experience = require("../models/Experience");

// GET all experiences
const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({
      createdAt: -1,
    });

    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET one experience
const getExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);

    if (!experience) {
      return res.status(404).json({
        message: "Experience not found",
      });
    }

    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE experience
const createExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body);

    const savedExperience = await experience.save();

    res.status(201).json({
      message: "Experience created successfully",
      experience: savedExperience,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// UPDATE experience
const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!experience) {
      return res.status(404).json({
        message: "Experience not found",
      });
    }

    res.status(200).json({
      message: "Experience updated successfully",
      experience,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// DELETE experience
const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(
      req.params.id
    );

    if (!experience) {
      return res.status(404).json({
        message: "Experience not found",
      });
    }

    res.status(200).json({
      message: "Experience deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
};
