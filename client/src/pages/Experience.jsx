import ExperienceCard from "../components/ExperienceCard";
import SectionTitle from "../components/SectionTitle";

import "../styles/Experience.css";

function Experience() {
  return (
    <main className="page">
      <section className="page-header">
        <p className="section-label">EXPERIENCE</p>

        <h1>Professional Experience</h1>

        <p>
          My professional experience and contributions throughout my nursing
          career.
        </p>
      </section>

      <section className="experience-page">
        <SectionTitle label="CAREER" title="Professional Experience" />

        <div className="experience-list">
          <ExperienceCard
            dates="2024 – Present"
            title="Registered Nurse"
            organization="Hospital / Healthcare Organization"
            description="Providing comprehensive patient care while collaborating with interdisciplinary healthcare teams."
            responsibilities={[
              "Provide compassionate, patient-centered care.",
              "Monitor and document patient conditions.",
              "Communicate with patients, families, and healthcare professionals.",
              "Administer medications and treatments according to established protocols.",
            ]}
          />

          <ExperienceCard
            dates="2022 – 2024"
            title="Nursing Position"
            organization="Healthcare Organization"
            description="Supported patients through individualized care and effective communication."
            responsibilities={[
              "Assisted with patient assessments and care planning.",
              "Maintained accurate patient documentation.",
              "Collaborated with members of the healthcare team.",
            ]}
          />
        </div>
      </section>
    </main>
  );
}

export default Experience;
