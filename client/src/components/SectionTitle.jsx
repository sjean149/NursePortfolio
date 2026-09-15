function SectionTitle({ label, title, description }) {
  return (
    <div className="section-title">
      {label && <p className="section-label">{label}</p>}

      <h2>{title}</h2>

      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default SectionTitle;
