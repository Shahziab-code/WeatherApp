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
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

export default function Home({ weatherData, isLoading }) {
  
  return (
    <div className="home-container">
      {isLoading && <p>Loading...</p>}
      {weatherData && (
        <>
          <div className="left-column">
            <BigWeatherBox
              temp={weatherData?.current?.temp_c}
              city={weatherData?.location?.name}
              country={weatherData?.location?.country}
              time={weatherData?.location?.localtime}
            />

            <div className="small-grid">
              <WeatherCard
                title="Wind Degree"
                value={`${weatherData?.current?.wind_degree} ${weatherData?.current?.wind_dir}`}
                icon={<FontAwesomeIcon icon={faCompass} />}
              />

              <WeatherCard
                title="Wind Speed"
                value={`${weatherData?.current?.wind_kph}kph`}
                icon={<FontAwesomeIcon icon={faWind} />}
              />

              <WeatherCard
                title="Feels Like"
                value={`${weatherData?.current?.feelslike_c}°C`}
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
            <DetailCard
              title="Humidity"
              value={`${weatherData?.current?.humidity}%`}
            />
            <DetailCard
              title="Pressure"
              value={`${weatherData?.current?.pressure_in} hPa`}
            />
            <DetailCard
              title="Visibility"
              value={`${weatherData?.current?.vis_km} km`}
            />
            <DetailCard
              title="UV Index"
              value={`${weatherData?.current?.uv}`}
            />
          </div>
        </>
      )}
      {!isLoading && !weatherData && <p>Search a Country to see weather</p>}
    </div>
  );
}
