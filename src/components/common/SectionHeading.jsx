export function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading"><p className="eyebrow"><span /> {eyebrow}</p><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
