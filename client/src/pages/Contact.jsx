import { useState } from "react";
import { API_URL } from "../config";
import "../styles/Contact.css";

const emptyForm = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", text }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setFormData(emptyForm);
      setStatus({
        type: "success",
        text: "Thank you for your message! I'll get back to you soon.",
      });
    } catch (err) {
      console.error("Failed to send message:", err);
      setStatus({
        type: "error",
        text: "Sorry, your message couldn't be sent. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="page">
      <section className="page-header">
        <p className="section-label">CONTACT</p>

        <h1>Let's Connect</h1>

        <p>
          I'd love to hear from you. Send me a message and I'll get back to you.
        </p>
      </section>

      <section className="contact-page">
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p>
            Whether you'd like to learn more about my professional experience or
            discuss an opportunity, feel free to reach out.
          </p>

          <div className="contact-details">
            <div>
              <strong>Email</strong>
              <p>Chanbeauge03@gmail.com</p>
            </div>

            <div>
              <strong>LinkedIn</strong>
              <p>linkedin.com/in/example</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>

          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows="6"
            required
          />

          <button type="submit" disabled={submitting}>
            {submitting ? "Sending…" : "Send Message"}
          </button>

          {status && (
            <p className={`form-status ${status.type}`} role="status">
              {status.text}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

export default Contact;
