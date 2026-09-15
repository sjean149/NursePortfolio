import { Link } from "react-router-dom";

import SkillCard from "../components/SkillCard";
import SectionTitle from "../components/SectionTitle";

import "../styles/Home.css";

import nursePhoto from "../assets/images/nurse-photo.jpg";

function Home() {
  return (
    <main>
      {/* HERO */}

      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-label">REGISTERED NURSE</p>

            <h1>
              Compassionate Care.
              <span>Professional Excellence.</span>
            </h1>

            <p className="hero-description">
              Dedicated to providing patient-centered care, supporting positive
              outcomes, and creating a safe and compassionate healthcare
              experience.
            </p>

            <div className="hero-buttons">
              <Link to="/experience" className="primary-button">
                View My Experience
              </Link>

              <Link to="/contact" className="secondary-button">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="hero-image-container">
            <img
              src={nursePhoto}
              alt="Registered Nurse"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}

      <section className="home-about">
        <div className="home-section-container">
          <SectionTitle
            label="ABOUT ME"
            title="Caring for Patients, Supporting People"
          />

          <div className="about-preview-content">
            <p>
              I am a dedicated nursing professional committed to providing
              high-quality, patient-centered care. I believe effective
              communication, compassion, and clinical knowledge are essential to
              creating positive patient experiences.
            </p>

            <p>
              My goal is to support patients and their families while working
              collaboratively with healthcare professionals to deliver safe and
              effective care.
            </p>

            <Link to="/about" className="text-link">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section className="skills-section">
        <div className="home-section-container">
          <SectionTitle
            label="MY EXPERTISE"
            title="Skills & Strengths"
            description="A combination of clinical knowledge, compassion, communication, and professionalism."
          />

          <div className="skills-grid">
            <SkillCard
              icon="♡"
              title="Patient Care"
              description="Providing compassionate and individualized care based on each patient's needs."
            />

            <SkillCard
              icon="✚"
              title="Clinical Skills"
              description="Applying clinical knowledge, assessment, and critical thinking to patient care."
            />

            <SkillCard
              icon="◎"
              title="Communication"
              description="Building trusting relationships with patients, families, and healthcare teams."
            />

            <SkillCard
              icon="⌘"
              title="Healthcare Technology"
              description="Using electronic health records and technology to support quality patient care."
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE PREVIEW */}

      <section className="experience-preview">
        <div className="home-section-container">
          <div className="experience-preview-content">
            <div>
              <p className="section-label">PROFESSIONAL EXPERIENCE</p>

              <h2>A Career Built Around Patient Care</h2>

              <p>
                Explore my professional experience, responsibilities,
                accomplishments, and continued development as a nursing
                professional.
              </p>
            </div>

            <Link to="/experience" className="primary-button">
              View Experience
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}

      <section className="home-contact">
        <div>
          <p className="section-label">LET'S CONNECT</p>

          <h2>Interested in learning more?</h2>

          <p>
            Feel free to reach out to discuss my experience and professional
            background.
          </p>

          <Link to="/contact" className="primary-button">
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
