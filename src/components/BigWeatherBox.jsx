import "../style/bigweather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

export default function BigWeatherBox({ temp, city, country, time }) {

  return (
    <div className="big-box">
      <div>
        <h1 className="temp">{temp}°C</h1>
        <p className="location">{city}, {country}</p>
        <p className="date">Time, {time}</p>
      </div>
      <div className="big-icon">
        <FontAwesomeIcon icon={faCloudSun} />
      </div>
    </div>
  );
}
