const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
    },

    organization: {
      type: String,
      required: true,
    },

    startDate: {
      type: String,
    },

    endDate: {
      type: String,
      default: "Present",
    },

    description: {
      type: String,
      required: false,
    },

    skills: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Experience", experienceSchema);
