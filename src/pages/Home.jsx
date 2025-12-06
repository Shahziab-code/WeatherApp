import { useState, useEffect } from "react";

import BigWeatherBox from "../components/BigWeatherBox";
import WeatherCard from "../components/WeatherCard";
import DetailCard from "../components/DetailCard";
import ForecastCard from "../components/ForecastCard";
import "../style/home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudRain,
  faWind,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          "https://api.weatherstack.com/current?access_key=952b3593473fbc342921807beb8735ed&query=pakistan"
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error",err);
      }
    };
    loadData();
    
  }, []);



  return (
    <div className="home-container">
      <div className="left-column">
        <BigWeatherBox />

        <div className="small-grid">
          <WeatherCard
            title="Rain Chances"
            value="23%"
            icon={<FontAwesomeIcon icon={faCloudRain} />}
          />

          <WeatherCard
            title="Wind Speed"
            value="13 km/h"
            icon={<FontAwesomeIcon icon={faWind} />}
          />

          <WeatherCard
            title="Feels Like"
            value="24°C"
            icon={<FontAwesomeIcon icon={faTemperatureHigh} />}
          />
        </div>

        <div className="forecast-row">
          <ForecastCard
            day="Mon"
            icon={<FontAwesomeIcon icon={faCloudRain} />}
            temp="21°C"
          />
          <ForecastCard
            day="Tue"
            icon={<FontAwesomeIcon icon={faTemperatureHigh} />}
            temp="23°C"
          />
          <ForecastCard
            day="Wed"
            icon={<FontAwesomeIcon icon={faWind} />}
            temp="22°C"
          />
          <ForecastCard
            day="Thu"
            icon={<FontAwesomeIcon icon={faCloudRain} />}
            temp="20°C"
          />
          <ForecastCard
            day="Fri"
            icon={<FontAwesomeIcon icon={faTemperatureHigh} />}
            temp="25°C"
          />
        </div>
      </div>

      <div className="right-column">
        <DetailCard title="Humidity" value="69%" />
        <DetailCard title="Pressure" value="1013 hPa" />
        <DetailCard title="Visibility" value="12 km" />
        <DetailCard title="UV Index" value="5" />
      </div>
    </div>
  );
}
