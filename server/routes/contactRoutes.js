const express = require("express");

const {
  createContact,
  getContacts,
  deleteContact,
} = require("../controllers/contactController");

const router = express.Router();

// CREATE contact message
router.post("/", createContact);

// GET all contact messages
router.get("/", getContacts);

// DELETE contact message
router.delete("/:id", deleteContact);

module.exports = router;

