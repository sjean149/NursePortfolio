import { useEffect, useState } from "react";

import ExperienceCard from "../components/ExperienceCard";
import SectionTitle from "../components/SectionTitle";
import { API_URL } from "../config";

import "../styles/Experience.css";

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadExperiences = async () => {
      try {
        const response = await fetch(`${API_URL}/api/experience`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        setExperiences(await response.json());
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error("Failed to load experiences:", err);
        setError("Unable to load experience right now. Please try again later.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadExperiences();

    return () => controller.abort();
  }, []);

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

        {loading && <p className="experience-status">Loading experience…</p>}

        {error && (
          <p className="experience-status experience-error">{error}</p>
        )}

        {!loading && !error && (
          <div className="experience-list">
            {experiences.map(({ id, ...experience }) => (
              <ExperienceCard key={id} {...experience} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Experience;
