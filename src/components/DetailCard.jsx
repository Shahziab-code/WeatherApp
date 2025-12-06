import "../style/detailcard.css";

export default function DetailCard({ title, value }) {
  return (
    <div className="detail-card">
      <p className="detail-title">{title}</p>
      <h3 className="detail-value">{value}</h3>
    </div>
  );
}
