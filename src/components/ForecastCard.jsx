import "../style/forecastcard.css";

export default function ForecastCard({ day, icon, temp }) {
  return (
    <div className="forecast-card">
      <p className="f-day">{day}</p>
      <div className="f-icon">{icon}</div>
      <p className="f-temp">{temp}</p>
    </div>
  );
}
