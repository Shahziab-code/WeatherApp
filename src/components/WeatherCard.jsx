import "../style/weathercard.css";

export default function WeatherCard({ title, value, icon }) {
  return (
    <div className="weather-card">
      <div className="weather-left">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
      <div className="weather-right">{icon}</div>
    </div>
  );
}
