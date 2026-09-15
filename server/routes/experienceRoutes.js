const express = require("express");
const { getExperiences } = require("../controllers/experienceController");

const router = express.Router();

router.get("/", getExperiences);

module.exports = router;
