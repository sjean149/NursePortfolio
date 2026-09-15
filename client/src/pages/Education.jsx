import CertificationCard from "../components/CertificationCard";
import SectionTitle from "../components/SectionTitle";

import "../styles/Education.css";

function Education() {
  return (
    <main className="page">
      <section className="page-header">
        <p className="section-label">EDUCATION</p>

        <h1>Education & Certifications</h1>

        <p>
          My academic background, nursing credentials, and continuing
          professional development.
        </p>
      </section>

      {/* EDUCATION */}

      <section className="education-section">
        <SectionTitle label="ACADEMIC BACKGROUND" title="Education" />

        <div className="education-card">
          <div className="education-year">2024</div>

          <div>
            <h3>Bachelor of Science in Nursing</h3>

            <p>University Name</p>

            <p>
              Bachelor of Science in Nursing program focused on clinical
              practice, patient care, healthcare systems, and evidence-based
              practice.
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}

      <section className="certifications-section">
        <SectionTitle label="CREDENTIALS" title="Certifications" />

        <div className="certifications-grid">
          <CertificationCard
            title="Registered Nurse"
            organization="State Nursing Board"
            date="Current"
          />

          <CertificationCard
            title="Basic Life Support (BLS)"
            organization="American Heart Association"
            date="Current"
          />

          <CertificationCard
            title="Advanced Cardiovascular Life Support (ACLS)"
            organization="American Heart Association"
            date="Current"
          />
        </div>
      </section>
    </main>
  );
}

export default Education;
