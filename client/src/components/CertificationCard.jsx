function CertificationCard({ title, organization, date }) {
  return (
    <div className="certification-card">
      <h3>{title}</h3>

      <p>{organization}</p>

      <span>{date}</span>
    </div>
  );
}

export default CertificationCard;
