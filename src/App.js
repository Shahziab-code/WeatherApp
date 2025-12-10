import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setWeatherData(null);
      return;
    }

    const fetchWeather = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=394b4962595a420b9f2140027250612&q=${query}`
        );
        if (!res.ok) throw new Error("Country Not Found");
        const data = await res.json();
        setWeatherData(data);
        console.log(weatherData);
        
      } catch (error) {
        setWeatherData(null);
        console.log("Error: ",error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounce = setTimeout(fetchWeather);
    return ()=> clearTimeout(debounce)
  }, [query]);

  return (
    <div>
      <Navbar onSearch={(value) => setQuery(value)} />
      <Home weatherData={weatherData} isLoading={isLoading} />
    </div>
  );
}

export default App;
