const Contact = require("../models/Contact");

// CREATE contact message
const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);

    const savedContact = await contact.save();

    res.status(201).json({
      message: "Message sent successfully",
      contact: savedContact,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// GET all contact messages
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.json(contacts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE contact message
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        message: "Contact message not found",
      });
    }

    res.json({
      message: "Contact message deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  deleteContact,
}
