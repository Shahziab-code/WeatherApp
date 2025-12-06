import { useState, useEffect } from "react";
import "../style/bigweather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

export default function BigWeatherBox() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const loadData = async () => {
        try {
          const res = await fetch(
            "https://api.weatherstack.com/current?access_key=952b3593473fbc342921807beb8735ed&query=pakistan"
          );
          const json = await res.json();
          setData(json);
         if(res){
          //  console.log(json?.current?.pressure);
         }
          
        } catch (err) {
          console.error("Error",err);
        }
      };
      loadData();
      
    }, []);
  return (
    <div className="big-box">
      <div>
        <h1 className="temp">{data?.current?.temperature}</h1>
        <p className="location">Karachi, Pakistan</p>
        <p className="date">Tuesday, 10:35 AM</p>
      </div>
      <div className="big-icon">
        <FontAwesomeIcon icon={faCloudSun} />
      </div>
    </div>
  );
}
