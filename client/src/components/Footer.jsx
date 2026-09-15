import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Jane Doe, RN</h3>

          <p>Compassionate care. Professional excellence.</p>
        </div>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/education">Education</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-socials">
          <a href="mailto:nurse@example.com">Email</a>

          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Jane Doe. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
