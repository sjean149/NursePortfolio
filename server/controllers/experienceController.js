const Experience = require("../models/Experience");

// GET all experiences (most recent first, in the order they were seeded)
const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.findAll({
      order: [["id", "ASC"]],
    });

    res.status(200).json(experiences);
  } catch (error) {
    console.error("Error fetching the experiences:", error);
    res.status(500).json({
      message: "Failed to fetch experiences",
    });
  }
};

module.exports = {
  getExperiences,
};
