import certificationData from "./certificationData";

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2 className="certifications-heading">Certifications</h2>
      <div className="certifications-container">
        {certificationData.map((certification) => (
          <img
            key={certification.id}
            src={certification.img}
            alt="this is a certification"
            className="certification-image"
            width={500}
            height={380}
          />
        ))}
      </div>
    </section>
  );
};
export default Certifications;
