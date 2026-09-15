import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    alert("Thank you for your message!");
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
              <p>nurse@example.com</p>
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

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
