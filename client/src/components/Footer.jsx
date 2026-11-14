import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Manola Jean, RN, BSN</h3>

          <p>Compassionate care. Professional excellence.</p>
        </div>

        <div className="footer-socials">
          <a href="mailto:sephorejean@gmail.com">Email</a>

          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      
    </footer>
  );
}

export default Footer;
