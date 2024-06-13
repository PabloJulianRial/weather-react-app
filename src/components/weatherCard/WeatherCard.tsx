import "./WeatherCard.scss";
import { useWeather } from "../../context/WeatherContext";
import WeatherImage from "../weatherImage/WeatherImage";
const WeatherCard = () => {
  const { currentWeather, forecast } = useWeather();
  if (!currentWeather || !forecast) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-card">
      <div className="weather-card__head">
        <WeatherImage />
        <div className="weather-card__links">
          <div className="weather-card__forecast">
            {currentWeather.current.condition.text}
          </div>
          <div className="weather-card__feels">
            <div className="weather-card__feels--text">feels like</div>
            <div className="weather-card__feels--temp">
              {currentWeather.current.feelslike_c}°c
            </div>
          </div>
        </div>
      </div>
      <div className="weather-card__temp">
        {currentWeather.current.temp_c}°c
      </div>
      <div className="weather-card__range">
        <div className="weather-card__range--min">
          <div className="weather-card__range--min--text">L</div>
          <div className="weather-card__range--min--temp">
            {forecast.forecast.forecastday[0].day.mintemp_c}°c
          </div>
        </div>
        <div className="weather-card__range--max">
          <div className="weather-card__range--max--text">H</div>
          <div className="weather-card__range--max--temp">
            {forecast.forecast.forecastday[0].day.maxtemp_c}°c
          </div>
        </div>
      </div>
      <div className="weather-card__stats">
        <div className="weather-card__stats--wind">
          <div className="weather-card__stats--wind--text">wind </div>
          <div className="weather-card__stats--wind--int">
            {currentWeather.current.wind_mph}
          </div>
        </div>

        <div className="weather-card__stats--gusts">
          <div className="weather-card__stats--gusts--text">gusts </div>
          <div className="weather-card__stats--gusts--int">
            {currentWeather.current.gust_mph}
          </div>
        </div>

        <div className="weather-card__stats--humidity">
          <div className="weather-card__stats--humidity--text">humid</div>
          <div className="weather-card__stats--humidity--int">
            {currentWeather.current.humidity}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
