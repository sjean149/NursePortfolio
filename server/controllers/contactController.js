const Contact = require("../models/Contact");
const transporter = require("../config/mailer");

// CREATE contact and send email
const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save contact message to PostgreSQL
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    // Send email notification
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Portfolio Contact: ${name}`,
        text: `
          Name: ${name}
          Email: ${email}

          Message:
          ${message}
        `,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    res.status(201).json({
      message: "Contact message submitted successfully!",
      contact,
    });
  } catch (error) {
    console.error("Contact error:", error);

    res.status(500).json({
      message: "Failed to submit contact message.",
    });
  }
};

// GET all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll();

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE contact
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id);

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    await contact.destroy();

    res.status(200).json({
      message: "Contact deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createContact,
  getContacts,
  deleteContact,
};
