import SectionTitle from "../components/SectionTitle";
import "../styles/About.css";

function About() {
  return (
    <main className="page">
      <section className="page-header">
        <p className="section-label">ABOUT ME</p>

        <h1>My Nursing Journey</h1>

        <p>
          Compassionate care, lifelong learning, and a commitment to making a
          difference in the lives of others.
        </p>
      </section>

      <section className="about-page">
        <SectionTitle label="WHO I AM" title="A Patient-Centered Approach" />

        <div className="about-text">
          <p>
            I am a dedicated nursing professional passionate about providing
            compassionate and high-quality patient care.
          </p>

          <p>
            Throughout my nursing career, I have developed strong clinical,
            communication, and organizational skills while working with
            patients, families, and healthcare teams.
          </p>

          <p>
            I believe every patient deserves to be treated with dignity,
            respect, and compassion. My approach to nursing is centered around
            listening to patients, understanding their needs, and providing safe
            and effective care.
          </p>
        </div>
      </section>

      <section className="nursing-philosophy">
        <SectionTitle label="MY PHILOSOPHY" title="What Nursing Means to Me" />

        <blockquote>
          "Nursing is more than providing medical care. It is about creating
          trust, offering compassion, and supporting people during some of their
          most important moments."
        </blockquote>
      </section>
    </main>
  );
}

export default About;
