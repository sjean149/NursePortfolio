function ExperienceCard({
  dates,
  title,
  organization,
  description,
  responsibilities,
}) {
  return (
    <div className="experience-card">
      <div className="experience-date">{dates}</div>

      <div className="experience-content">
        <h3>{title}</h3>

        <h4>{organization}</h4>

        <p>{description}</p>

        {responsibilities && (
          <ul>
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;
